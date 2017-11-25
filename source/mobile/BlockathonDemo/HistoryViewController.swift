//
//  HistoryViewController.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit

class HistoryViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {

	@IBOutlet weak var tableView: UITableView!
	@IBOutlet weak var profileImageView: UIImageView!

	override func viewDidLoad() {
		super.viewDidLoad()
		self.profileImageView.layer.cornerRadius = 40.0
		self.profileImageView.layer.masksToBounds = true
		self.tableView.allowsSelection = false
		self.tableView.delegate = self
		self.tableView.dataSource = self
	}

	func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
		return 100
	}

	func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
		return 7
	}

	func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
			return UITableViewCell()
	}

}

