I've built some apps that are to-do lists, but that was a while ago and I don't remember the stuff very well.
For this personal assistant, I'd like to create a to-do list that lets me add in the expected time as well as importance for any homework to-dos I might have. I was thinking of enabling color coding for each to-do item, such as red for very important/hard, yellow for medium, green for easy, and maybe like a light blue for just different random tasks that don't require much effort like sending a certain email. 

With this, I'd be able to sort by difficulty if I wanted to do something easy or hard, as well as by time, if I wanted to just get a bunch of easy assignments out of the way.

Ideally, I could also split up my to-do list into a daily goals, which would include things like hitting the gym or doing my laundry.

Another good feature would to have some tasks be automatically appear every day, so to have an option that makes things like the gym show up automatically each day.

At the top of the page, maybe there could be some numbers, saying what percent of the day has passed, and then what percent of my tasks I've gotten done. (of course, more important ones would get a greater weight in this calculation)

So, to summarize so far, each to-do item would have the following properties.

    [
        id,
        text,
        time written,
        expected time to complete,
        importance,
        status (whether it has been completed)
    ]

Each one also should have editable text. Maybe a feature could be implemented where I can select a task and the screen would shift to a large timer that countdowns from the expected time I put I needed to finish it. This would be me entering a 'work mode'. 

That was a lot of big goals, so here's some pseudocode for how I plan to implement the more straightforward features:

-- the text-box at the bottom should allow the user to type in it, and then when the user clicks the add button it can export the data along with the time it was created and the other information. There can be a button the side for the user to set more advanced properties, but if they don't it will just appear as a green task with a 30 min completion time. 

-- when the add button is clicked it will reload the page.

-- This exported data will be used to create another <li> item which represents that to do, which will be added to the bottom of a list of them, possibly using a for loop that cycles through an array of To-Do objects which have the above properties.

--  Each to-do will have a button on the side that removes it from the list then reloads the list.

-- The top search bar will refresh whenever a key is pressed. It can search through all the text of the to-do objects, and only load the ones which have text that contains the entered characters. 

-- If the to-do array is empty, text will be displayed: "Add a to-do!"

-- 