# 03 Homework - Password Generator

## Default screen before event

![Initial screen](./Assets/images/picture1.png)

## Event: Clicking "generate password" button & confirm window 1

![Clicking the generate password button](./Assets/images/picture2.png)

Event: clicking "generate password" button. 

This calls a confirm window, asking "Do you want to include lower case characters in your password?"

If the response is "OK" the output is held to be "true", and lower case characters are added. If response is "cancel" the output is held to be "false", and lower case characters are not added. 

Event: "OK" was clicked.

## Logging previous response & confirm window 2

![logging lower case, confirm window 2](./Assets/images/picture3.png)

As "OK" was clicked in the previous confirm window, the lower case characters are logged in the console. 

The function then proceeds to call the next confirm window, asking "Do you want to include upper case characters in your password?"

If the response is "OK" the output is held to be "true", and upper case characters are added. If response is "cancel" the output is held to be "false", and upper case characters are not added. 

Event: "OK" was clicked.

## Logging previous response & confirm window 3

![logging upper case, confirm window 3](./Assets/images/picture4.png)

As "OK" was clicked in the previous confirm window, the upper case characters are logged in the console. 

The function then proceeds to call the next confirm window, asking "Do you want to include numbers in your password?"

If the response is "OK" the output is held to be "true", and numbers are added. If response is "cancel" the output is held to be "false", and numbers are not added. 

Event: "OK" was clicked.

## Logging previous response & confirm window 4

![logging numbers, confirm window 4](./Assets/images/picture5.png)

As "OK" was clicked in the previous confirm window, the numbers are logged in the console. 

The function then proceeds to call the next confirm window, asking "Do you want to include special characters in your password?"

If the response is "OK" the output is held to be "true", and special characters are added. If response is "cancel" the output is held to be "false", and special characters are not added. 

Event: "OK" was clicked.

## Logging previous response & query window 1

![logging special characters, query window 1](./Assets/images/picture6.png)

As "OK" was clicked in the previous confirm window, the special characters are logged in the console. 

The function then proceeds to call a query window, asking "Please choose a password length between 8 and 128 characters."

## Number entered into query box

![entering query](./Assets/images/picture7.png)

A number, "45" is entered into the query box.

Event: "OK" button clicked

## Logging previous response & password output into website

![password generation and output to website 1](./Assets/images/picture8.png)
![password generation and output to website 1](./Assets/images/picture9.png)

"OK" was clicked and "45" submitted in the previous query window. The loop randomly selects a single character, then adds it to the password object. This single character selection and addition is repeated/looped for the select amount of times, "45", which is logged to the console. 

Once the "45" loop as finished, the entire password is logged, then submitted to the website output text. 


To access this website, please click [HERE.](https://b3nj1e.github.io/03-Homework-Password-Generator/)
To access the repository, please click [HERE.](https://github.com/B3nj1e/03-Homework-Password-Generator)


Thanks for looking at my work. 

## Quick Question:

I just had a question about validation, mentioned in the homework README file. Is validation just performing the console.log after each step to check each step is working in the chain?



