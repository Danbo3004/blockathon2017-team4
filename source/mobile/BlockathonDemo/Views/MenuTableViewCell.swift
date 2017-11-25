//
//  MenuTableViewCell.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit

class MenuTableViewCell: UITableViewCell {

	@IBOutlet weak var iconImageView: UIImageView!
	@IBOutlet weak var titleLabel: UILabel!

	override func awakeFromNib() {
		super.awakeFromNib()
		self.separatorInset = UIEdgeInsets.zero
	}

}
