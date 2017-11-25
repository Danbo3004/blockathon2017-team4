//
//  BorrowerCell.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit

@objc protocol BorrowerCellDelegate {
	func borrowerCellDidTapBidRate(cell: BorrowerCell)
}

class BorrowerCell: UITableViewCell {

	@IBOutlet weak var avatarImage: UIImageView!
	@IBOutlet weak var separatorHeightConstraint: NSLayoutConstraint!
	@IBOutlet weak var bidRateButton: UIButton!
	@IBOutlet weak var nameLabel: UILabel!
	@IBOutlet weak var lendValueLabel: UILabel!
	@IBOutlet weak var expectInterestLabel: UILabel!

	weak var delegate: BorrowerCellDelegate?

	override func awakeFromNib() {
		super.awakeFromNib()
		// Initialization code
		separatorHeightConstraint.constant = 0.4
		self.avatarImage.layer.cornerRadius = 32.0
		self.avatarImage.layer.masksToBounds = true
		self.bidRateButton.layer.cornerRadius = 7.5
	}

	override func prepareForReuse() {
		self.avatarImage.image = UIImage(named: "avatar_placeholder")
	}

	override func setSelected(_ selected: Bool, animated: Bool) {
		super.setSelected(false, animated: animated)
	}

	@IBAction func bidRateButtonDidTap(_ sender: Any) {
		if let delegate = self.delegate {
			delegate.borrowerCellDidTapBidRate(cell: self)
		}
	}

}
