//
//  LenderDashboardViewController.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit
import SWRevealViewController

class LenderDashboardViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {

	@IBOutlet weak var backButton: UIButton!
	@IBOutlet weak var hamburgerButton: UIButton!
	@IBOutlet weak var tableView: UITableView!
	@IBOutlet weak var profileImageView: UIImageView!
	@IBOutlet weak var nameLabel: UILabel!
	@IBOutlet weak var etherBalanceLabel: UILabel!
	@IBOutlet weak var tokenBalanceLabel: UILabel!

	var swrevealViewController: SWRevealViewController {
		return revealViewController()
	}

	var borrowerList: [User] = [];
	var user: User!
	var currentLowestBid = 12.0

	override func viewDidLoad() {
		super.viewDidLoad()
		let appDelegate = UIApplication.shared.delegate as! AppDelegate
		user = appDelegate.user

		self.initUI()
	}

	func initUI() {
		self.hamburgerButton.isHidden = false
		self.backButton.isHidden = true
		hamburgerButton.addTarget(swrevealViewController, action: #selector(SWRevealViewController.revealToggle(_:)), for: .touchUpInside)
		view.addGestureRecognizer(swrevealViewController.panGestureRecognizer())
		self.tableView.register(UINib(nibName: "BorrowerCell", bundle: nil), forCellReuseIdentifier: "BorrowerCellIdentifier")
		self.tableView.separatorStyle = .none
		self.profileImageView.layer.cornerRadius = 40.0
		self.profileImageView.layer.masksToBounds = true;
	}

	override func viewWillAppear(_ animated: Bool) {
		super.viewWillAppear(animated)
		self.tableView.reloadData()
		self.reloadData()
	}

	func reloadData() {
		self.user.requestUserData { (user, error) in
			self.user = user
			self.populateData()
		}
		self.user.requestUserBalance { (user, error) in
			self.user = user
			self.populateData()
		}
		self.user.requestAllUser { (userList, error) in
			self.borrowerList = userList.filter({ (user) -> Bool in
				return user.userType == "borrower"
			})
			self.tableView.reloadData()
		}
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
		return 150.0;
	}

	func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
		return borrowerList.count;
	}

	func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
		if let cell = tableView.dequeueReusableCell(withIdentifier: "BorrowerCellIdentifier") as? BorrowerCell {
			let borrower = self.borrowerList[indexPath.row]
			cell.avatarImage.image = UIImage.init(named: "borrower\(indexPath.row)")
			cell.nameLabel.text = borrower.username
			return cell;
		}
		return UITableViewCell();
	}

	func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
		let alertController = UIAlertController(title: "Bid interest", message: "Enter the interest rate you want to bid\nCurrent lowest bid rate: \(currentLowestBid)%", preferredStyle: UIAlertControllerStyle.alert)
		alertController.addAction(UIAlertAction(title: "Cancel", style: UIAlertActionStyle.cancel, handler: { (action: UIAlertAction) in
			tableView.deselectRow(at: indexPath, animated: true)
			alertController.dismiss(animated: true, completion: nil)
		}))

		alertController.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: { (action: UIAlertAction) in
			let interestRateBidTextField = alertController.textFields![0] as UITextField
			let interestRateBid : Double = NSString(string: interestRateBidTextField.text!).doubleValue
			if (interestRateBid < self.currentLowestBid) {
				print("Success")
			} else {
				print("Failed")
			}
			tableView.deselectRow(at: indexPath, animated: true)
			alertController.dismiss(animated: true, completion: nil)
		}))

		alertController.addTextField { (textField : UITextField!) in
			textField.placeholder = "Enter Bidding Interest Rate"
		}

		present(alertController, animated: true, completion: nil)
	}

}
