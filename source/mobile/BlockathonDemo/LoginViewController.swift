//
//  LoginViewController.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/24/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit
import SwiftyJSON

class LoginViewController: UIViewController, UITextFieldDelegate {

	@IBOutlet weak var emailTextField: UITextField!
	@IBOutlet weak var passwordTextField: UITextField!
	@IBOutlet weak var errorLabel: UILabel!
	@IBOutlet weak var loadingView: UIView!
	@IBOutlet weak var activityIndicator: UIActivityIndicatorView!

	var email: String?
	var password: String?

	let correctEmail = "test@a.b"
	let correctPassword = "qweqwe"

	override func viewDidLoad() {
		super.viewDidLoad()
		self.passwordTextField.isSecureTextEntry = true;
		self.passwordTextField.delegate = self
		self.emailTextField.delegate = self
		self.errorLabel.isHidden = true
		self.loadingView.isHidden = true
	}

	func textFieldDidBeginEditing(_ textField: UITextField) {
		self.errorLabel.isHidden = true
	}

	func textFieldShouldReturn(_ textField: UITextField) -> Bool {
		if (textField == self.emailTextField) {
			self.passwordTextField.becomeFirstResponder()
		} else {
			self.passwordTextField.resignFirstResponder()
			self.signInButtonDidTap(self)
		}
		return true;
	}

	@IBAction func signInButtonDidTap(_ sender: Any) {
		self.loadingView.isHidden = false
		self.activityIndicator.startAnimating()
		self.emailTextField.text = correctEmail
		self.passwordTextField.text = correctPassword
		self.email = self.emailTextField.text
		self.password = self.passwordTextField.text

		if self.validateAuthentication(email: email, password: password) {
			self.requestSignIn(email: email!, password: password!)
		} else {
			self.errorLabel.isHidden = false
		}
	}

	func validateAuthentication(email: String?, password: String?) -> Bool {
		return true
	}

	func requestSignIn(email: String, password: String) {
		let user = User()
		user.email = email
		user.password = password
		user.requestSignIn { (error: Error?) in
			self.loadingView.isHidden = true
			self.activityIndicator.stopAnimating()
			if let error = error {
				self.errorLabel.isHidden = false
				print(error)
			} else {
				DataManager.shared.currentUser = user
				self.performSegue(withIdentifier: "LoginToMainScreenSegue", sender: self)
			}
		}
	}

}

