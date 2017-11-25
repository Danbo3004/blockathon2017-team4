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
	@IBOutlet weak var dateTimeLabel: UILabel!

	override func awakeFromNib() {
		super.awakeFromNib()
		self.separatorInset = UIEdgeInsets.zero
		self.profileImageView.layer.cornerRadius = 30
		self.profileImageView.layer.masksToBounds = true
	}

}
