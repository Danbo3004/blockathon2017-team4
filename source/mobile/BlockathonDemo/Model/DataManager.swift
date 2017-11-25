//
//  DataManager.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit

class DataManager {
	var currentUser: User!
	var userList: [User]! = []
	var historyRecord: [History] = []
	var creditList: [Credit] = []

	static let shared: DataManager = {
		let instance = DataManager()

		// setup code
		instance.currentUser = User()

		return instance
	}()
}
