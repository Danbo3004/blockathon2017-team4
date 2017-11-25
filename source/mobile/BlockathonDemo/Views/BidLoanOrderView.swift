//
//  BidLoanOrderView.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit

@objc protocol BidLoanOrderViewDelegate {
	func bidLoanOrderViewDidTapCancel(bidLoanOrderView: BidLoanOrderView)
	func bidLoanOrderViewDidTapOK(bidLoanOrderView: BidLoanOrderView)
}

class BidLoanOrderView: UIView {

	@IBOutlet weak var wrapperView: UIView!
	@IBOutlet weak var currentLowestRateLabel: UILabel!
	@IBOutlet weak var amountLabel: UILabel!
	@IBOutlet weak var bidRateTextField: UITextField!
	@IBOutlet weak var rateStepper: UIStepper!
	@IBOutlet weak var cancelButton: UIButton!
	@IBOutlet weak var OKButton: UIButton!

	weak var delegate: BidLoanOrderViewDelegate?
	var credit: Credit!
	var currentLowestRate: Double = 0

	override func awakeFromNib() {
		super.awakeFromNib()
		wrapperView.layer.cornerRadius = 15.0
		OKButton.layer.cornerRadius = 15
		if #available(iOS 11.0, *) {
			OKButton.layer.maskedCorners = [.layerMaxXMaxYCorner]
		} else {
			// Fallback on earlier versions
		}
		wrapperView.layer.shadowOffset = CGSize(width: 0, height: 2)
		wrapperView.layer.shadowRadius = 5
		wrapperView.layer.shadowOpacity = 0.5
	}

	func populateData() {
		currentLowestRate = credit.rate
		currentLowestRateLabel.text = "\(currentLowestRate)"
		rateStepper.stepValue = 0.01
		rateStepper.value = currentLowestRate - 0.01
		rateStepper.maximumValue = currentLowestRate - 0.01
		rateStepper.minimumValue = 0.01
		rateStepper.addTarget(self, action: #selector(BidLoanOrderView.rateStepperValueDidChange(_:)), for: UIControlEvents.valueChanged)
		bidRateTextField.text = "\(currentLowestRate - 0.01)"
		amountLabel.text = "$\(credit.amount)"
	}

	func rateStepperValueDidChange(_ rateStepper: UIStepper) {
		self.bidRateTextField.text = "\(rateStepper.value)"
	}

	@IBAction func cancelButtonDidTap(_ sender: Any) {
		self.removeFromSuperview()
		if let delegate = delegate {
			delegate.bidLoanOrderViewDidTapCancel(bidLoanOrderView: self)
		}
	}

	@IBAction func OKButtonDidTap(_ sender: Any) {
		if let delegate = delegate {
			delegate.bidLoanOrderViewDidTapOK(bidLoanOrderView: self)
		}
	}

}
