//
//  HistoryViewController.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit

class HistoryViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {

	@IBOutlet weak var hamburgerButton: UIButton!
	@IBOutlet weak var backButton: UIButton!
	@IBOutlet weak var tableView: UITableView!
	@IBOutlet weak var profileImageView: UIImageView!
	@IBOutlet weak var nameLabel: UILabel!
	@IBOutlet weak var etherBalanceLabel: UILabel!
	@IBOutlet weak var tokenBalanceLabel: UILabel!

	var user: User! = User()
	var historyRecord: [History] = []

	override func viewDidLoad() {
		super.viewDidLoad()
		self.initUI()
	}

	func initUI() {
		self.hamburgerButton.isHidden = false
		self.backButton.isHidden = true
		
		self.profileImageView.layer.cornerRadius = 40.0
		self.profileImageView.layer.masksToBounds = true
		self.tableView.allowsSelection = false
		self.tableView.delegate = self
		self.tableView.dataSource = self
		self.profileImageView.layer.cornerRadius = 40.0
		self.profileImageView.layer.masksToBounds = true;
	}

	override func viewWillAppear(_ animated: Bool) {
		super.viewWillAppear(animated)
		self.reloadData()
	}

	func reloadData() {
		let appDelegate = UIApplication.shared.delegate as! AppDelegate
		self.user = appDelegate.user
		self.historyRecord = [History(), History(), History()]
		self.tableView.reloadData()
	}

	func populateData() {
		if !user.username.isEmpty {
			self.nameLabel.text = user.username
		}
		if !(user.ETHBalance >= Double(0.0)) {
			self.etherBalanceLabel.text = "\(user.ETHBalance) ETH"
		}
		if !(user.tokenBalance >= Double(0.0)) {
			self.tokenBalanceLabel.text = "\(user.tokenBalance) VNDT"
		}
	}

	func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
		return 80
	}

	func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
//		return historyRecord.count
		return 3
	}

	func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
		if let cell = tableView.dequeueReusableCell(withIdentifier: "HistoryCellIdentifier") as? HistoryCell {
			let history = self.historyRecord[indexPath.row]
			cell.profileImageView.image = UIImage.init(named: "borrower\(indexPath.row)")
			cell.nameLabel.text = history.traderName
			cell.historyLabel.text = self.historyActionDisplay(history: history)
			cell.dateTimeLabel.text = "Oct 21st"
			return cell;
		}
		return UITableViewCell();
	}

	func historyActionDisplay(history: History) -> String {
			return "<-->"
	}

}

