//
//  LoginViewController.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/24/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit

class LoginViewController: UIViewController {

	@IBOutlet weak var emailTextField: UITextField!
	@IBOutlet weak var passwordTextField: UITextField!

	var email: String?
	var password: String?

	override func viewDidLoad() {
		super.viewDidLoad()
		// Do any additional setup after loading the view, typically from a nib.
	}

	@IBAction func signInButtonDidTap(_ sender: Any) {
		self.email = self.emailTextField.text
		self.password = self.passwordTextField.text

		if self.validateAuthentication(email: email, password: password) {
			self.requestSignIn(email: email!, password: password!)
		} else {

		}
	}

	func validateAuthentication(email: String?, password: String?) -> Bool {
		return true

	}

	func requestSignIn(email: String, password: String) {
		self.performSegue(withIdentifier: "LoginToMainScreenSegue", sender: self)
	}

}

