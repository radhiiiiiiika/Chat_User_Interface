Chat User Interface Using React

This repository contains how a chat interface can be created using react. This user interface basically shows an interaction between a user and an AI chat bot that responds to the user's queries.

This has been done using React, so initially I created a React app. For creating an app using react, I used the following command:
npx create-react-app chat

This command created a new React project app named "chat", with three folders namely 'public', 'src' and 'node_modules', along with a readme file, a package.json and a package-lock.json. The 'src' folder contains all the source codes for the chat user interface.

=================================================================================================================================================================

The Chat_UI.js file shows a user interface where the application allows the user to select different chats and message the AI bot in that selected chat. It shows a conversation between the user and the AI bot where the bot responds with a constant message for now. This user interface consists of a sidebar with different pre-defined 'names' for chats that alllows the user to switch between multiple chats and have a conversation with the AI bot.

Some of the key features of this user interface is that it allows the user to select different chats, from the list of chats that are pre-defined, to interact with the AI bot. The users will be able to type and send messages to the selected chat and also receive constant AI responses from the AI chat bot.

=================================================================================================================================================================

The source code imports 'React' and the 'useState' hook to ensure that state variables can be added to the react components that are being used. It also imports the 'Chat_UI.css' file, that contains the styling for the chat user interface.

The main components of the Chat UI is defined under the functional component 'App'. This chat application has different state variables called 'chats', 'selectedChat', 'allChats', 'input', 'aiFirstMsg'.

The state variable 'chats' holds a list of pre-defined users, each of which are represented using an id and a name. This allows the user to choose which chat they can select and chat in.
The state variable 'selectedChats' ensures and keeps track of all the chats that is currently being selected by the user. This variable displays only a particular chat's message, that is selected by the user. And each time rhe user selects a different chat, it gets refresehed and shows the messages that has happened between the user and the AI bot in that particular chat (selected chat).
The 'allChats' state variable basically stores all the messages that are exchanged between the user as well as the AI bot in all the different chats. It contains every message between the user and the AI bots, in each and every chat.
The 'input' state variable is the message bar where in the user types their input message. This variable gets refreshed every time and allows the user type a new message after the send button is hit.
The 'aiFirstMsg' state variable checks if the message being sent by the AI bot is the first response given by the bot after the user sends a message. The response of the AI bot depends on whether it is the first message the bot is responding to or not.


The sendMsg function is responsible for sending the messages. Firstly, it checks if the user has entered a message in the input field or not. Once the user has entered a message, this function updates the chat display showing that this message has been sent by the user and refreshes the input are for a new message to be entered. After that, depending on whether this messgae is the first message entered by the user or not, the AI bot responds to it.

 Each of these variables are essential for managing the user interaction with the AI bot since they allow the components to refresh and update accoridng to the user's actions.

 Apart from these state variables, the source code also consists of a sidebar --- displaying the different chats from which the user can select which chat to select and chat in --- an input area --- where in the messages can be typed by the user and sent by hitting the enter key or clicking on the send button -- and finally the chat box area, where the messages between the user and the AI bot in each chat is displayed.

 ================================================================================================================================================================

 The 'Chat_UI.css' file consists of the styling for each component that has been used in the 'Chat_UI.js' file.

 ================================================================================================================================================================

 The code can also be altered with arise in further requirements such as real-time response from the AI Bot, permanent chat history and so on.

 ================================================================================================================================================================

 To run this react based Chat User Interface app, I went to the directory of this project using this command:
 cd chat

 And then run the Chat UI application using:
 npm start

==================================================================================================================================================================================================================================================================================================================================