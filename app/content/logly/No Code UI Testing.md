Guilty confession - I rarely write unit tests, but it's not that I don't see value in them. Anytime I sit down to code I immediately drown myself in bug fixes and new feature development. Tests are incredibly valuable though because when implemented correctly they can guarantee your application is working properly across all major browsers & devices. For applications like Logly manually testing every feature in production is just too time consuming. 

That's where frameworks like Playwright and Cypress come in. For testing a new feature in Logly I can launch an emulator and functionally interact with the web page. Playwright records my actions and generates tests for me. 

I still recommend writing unit tests for utility functions or complex logic but functional tests like this are such a better investment of time in my experience.



