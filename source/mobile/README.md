#Lalalend iOS app
##Introduction

Lalalend targets to construct a new massive market, where the participants can effectively invest to scale up their profit from spare cryptocurrency and fiat monetary.

This iOS application demonstrates the scenario, where the lender can scan the market of borrowers and choose to bid for their desire rate of interest. The rate of interest in the final deal should be a compromission between the borrower and the lender. Therefore, among list of borrowers, those have been evaluated for their payout capability and credit record, the invester can bid the lowest R.O.I they can accept. The bid would be recorded and wait to be mined in blockchain to prove the success of that transaction.

##Installation

The requirement to build the project successfully is to install the following development tools and environment

- XCode 8.3 or above (XCode 9.1 is recommended)
- CocoaPod
- MacOS environment

#### Install cocoapods
Run the following command in terminal

`gem install cocoapods`

Gem and ruby's compiler and environment are automatically included in MacOS.

#### Install pods
By installing cocoapods, the libraries those are used within the project can be re-installed into a new machine.
In the XCode project's directory should contain the `Podfile`. Perform the following command in the same location

`pod install`

The cocoapods will search for required dependencies of the project. All dependencies and libraries used within Lalalend iOS are reserved under MIT license.

##Compatibility

The Lalalend is compatible with XCode 8.3 and higher, using Swift 3 powered by Apple and target iOS 8.1 and higher devices.

Mobile is the default platform. Recommend to build on iPhone 6S and later simulator or real device.

Although iPad is compatible with the project, the usage upon iPad is not recommended, dues to unhandled UI/UX and workable code.

Although both landscape mode is unlocked, the user experience is not guaranteed as it is in portrait mode.