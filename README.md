# Lab 8 - Starter
Annie Phan

1. I would fit my automated tests within a Github action that runs whenever code is pushed because it would test and verify my code as I am developing it. Based on the fedback that I get from automated tests, I would then adjust my code accordingly. Fitting automated tests within GitHub actions would help automate the process. If I were to manually run them before pushing code, this is inefficient and GitHub actions could do these tasks for me. I would not run automated tests after all development is completed because I would not be able to catch bugs earlier on and I might have to re-write a significant portion of the development.
2.  No, I would not use an end to end test too check if a function is returning the correct output because I would use a unit test instead. 
3.  No, I would not use a unit test to test the message feature of a messaging application because I would have to know how the message interacts with other components of my application. While unit testing would allow me to test a specific part of my message, I would not be able to see the rest of it.
4.  I would use a unit test to test the "max message length" feature of a messaging application because it is a feature of my message and does not impact/interact with other parts of my application. This is a specific use of my message and is isolated enough to test.
