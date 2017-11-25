//
//  BorrowerCell.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit

class BorrowerCell: UITableViewCell {

	@IBOutlet weak var avatarImage: UIImageView!
	@IBOutlet weak var separatorHeightConstraint: NSLayoutConstraint!

	override func awakeFromNib() {
		super.awakeFromNib()
		// Initialization code
		separatorHeightConstraint.constant = 0.4
		selectionStyle = .none
		self.avatarImage.layer.cornerRadius = 32.0
		self.avatarImage.layer.masksToBounds = true
	}

	override func setSelected(_ selected: Bool, animated: Bool) {
		super.setSelected(false, animated: animated)
	}

}
