//
//  BaseModel.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/24/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit
import EVReflection

class BaseModel: EVObject {
	var id = 0
	var created: TimeInterval = 0
	var modified = 0

	required init() {
		super.init()
	}

	init(id: Int, created: TimeInterval, modified: Int) {
		self.id = id
		self.created = created
		self.modified = modified
	}

	func toDic() -> [String: Any] {
		return [String: Any]()
	}

}
