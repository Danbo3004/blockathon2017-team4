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
	@IBOutlet weak var addCreditButton: UIButton!

	var user: User! = User()
	var userList: [User]! = []
	var historyRecord: [History] = []

	override func viewDidLoad() {
		super.viewDidLoad()
		self.initUI()
	}

	func initUI() {
		self.hamburgerButton.isHidden = true
		self.backButton.isHidden = false
		
		self.profileImageView.layer.cornerRadius = 40.0
		self.profileImageView.layer.masksToBounds = true
		self.tableView.allowsSelection = false
		self.tableView.delegate = self
		self.tableView.dataSource = self
		self.profileImageView.layer.cornerRadius = 40.0
		self.profileImageView.layer.masksToBounds = true;
		self.addCreditButton.layer.cornerRadius = 50
	}

	override func viewWillAppear(_ animated: Bool) {
		super.viewWillAppear(animated)
		self.reloadData()
	}

	func reloadData() {
		self.user = DataManager.shared.currentUser
		self.userList = DataManager.shared.userList
		History.requestAllHistory(user: self.user) { (historyList, error) in
			self.historyRecord = historyList
			DataManager.shared.historyRecord = historyList

			// Test
			if (self.historyRecord.count == 0) {
				self.historyRecord = Constants.historyList()
			}
			self.tableView.reloadData()
		}

		self.user.requestUserData { (updatedUser, error) in
			self.user = updatedUser
			self.populateData()
			DataManager.shared.currentUser = self.user
		}
	}

	func populateData() {
		if !user.username.isEmpty {
			self.nameLabel.text = user.username
		}
		if (user.ETHBalance >= Double(0.0)) {
			self.etherBalanceLabel.text = "\(user.ETHBalance) ETH"
		}
		if (user.tokenBalance >= Double(0.0)) {
			self.tokenBalanceLabel.text = "\(user.tokenBalance) VNDT"
		}
	}

	func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
		return 80
	}

	func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
		return historyRecord.count
	}

	func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
		if let cell = tableView.dequeueReusableCell(withIdentifier: "HistoryCellIdentifier") as? HistoryCell {
			let history = self.historyRecord[indexPath.row]
			cell.profileImageView.image = UIImage.init(named: "borrower\(indexPath.row)")
			for user in userList {
				if user.id == history.traderId {
					cell.nameLabel.text = user.username
					break;
				}
			}
			cell.historyLabel.text = "\(history.totalValue) VNDT"
			cell.updateStatus(history: history)
			self.historyActionDisplay(history: history, cell: cell)
			cell.dateTimeLabel.text = String.stringFromTimeInterval(interval: history.created)
			return cell;
		}
		return UITableViewCell();
	}

	func historyActionDisplay(history: History, cell: HistoryCell) {
		// Current user is lending
		if history.historyOwnerId == user.id {
			cell.directionImageView.image = UIImage(named: "leftArrow")
		} else if (history.traderId == user.id) {
			cell.directionImageView.image = UIImage(named: "rightArrow")
		}
	}

	@IBAction func backButtonDidTap(_ sender: Any) {
		self.navigationController?.popViewController(animated: true)
	}

}

