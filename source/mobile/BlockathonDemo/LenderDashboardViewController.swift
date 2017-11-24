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

	var swrevealViewController: SWRevealViewController {
		return revealViewController()
	}

	var borrowerList: [BaseModel] = [];

	override func viewDidLoad() {
		super.viewDidLoad()
		self.initUI()
	}

	func initUI() {
		self.hamburgerButton.isHidden = false
		self.backButton.isHidden = true
		hamburgerButton.addTarget(swrevealViewController, action: #selector(SWRevealViewController.revealToggle(_:)), for: .touchUpInside)
		view.addGestureRecognizer(swrevealViewController.panGestureRecognizer())
		self.tableView.register(BorrowerCell.self, forCellReuseIdentifier: "BorrowerCellIdentifer")
	}

	func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
		return 64.0;
	}

	func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
		return borrowerList.count;
	}

	func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
		if let cell = tableView.dequeueReusableCell(withIdentifier: "BorrowerCellIdentifer") as? BorrowerCell {
			return cell;
		}
		return UITableViewCell();
	}

}
