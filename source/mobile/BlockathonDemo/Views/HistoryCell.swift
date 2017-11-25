//
//  HistoryCell.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit

class HistoryCell: UITableViewCell {
	@IBOutlet weak var profileImageView: UIImageView!
	@IBOutlet weak var nameLabel: UILabel!
	@IBOutlet weak var historyLabel: UILabel!
	@IBOutlet weak var statusLabel: UILabel!
	@IBOutlet weak var dateTimeLabel: UILabel!
	@IBOutlet weak var directionImageView: UIImageView!

	override func awakeFromNib() {
		super.awakeFromNib()
		self.separatorInset = UIEdgeInsets.zero
		self.profileImageView.layer.cornerRadius = 30
		self.profileImageView.layer.masksToBounds = true
	}

	func updateStatus(history: History) {
		self.statusLabel.text = history.status;
		switch history.status {
		case "Pending": self.statusLabel.textColor = UIColor.yellow
		case "Approved": self.statusLabel.textColor = UIColor.green
		case "Liquidated": self.statusLabel.textColor = UIColor.green
		case "Defaulted": self.statusLabel.textColor = UIColor.red
		default:
			self.statusLabel.textColor = UIColor(white: 0.8, alpha: 1)
		}
	}
}
