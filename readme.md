# Hi There
This is a game you're meant to play on your phone. When it's done, unless I change my mind, you should be able to hold your phone like a trumpet and practice fingering technique.

# Why?
I think this is a fun little project that has a lot of potential. While this is my first jump into game programming, I can also see that I might get into some basic data visualization as well. If I do good, I could foresee keeping a version up to date on a site, and then maybe doing a rewrite in a real language to make an app. But that would be real work! So this is just a fun little web app for now.

# What are you using?
At this stage, I want to keep the tooling to a minimum. For now that means that I'm using vanilla JS. I don't see myself wanting to add a framework of any kind, but I can foresee _maybe_ wanting to use Typescript?

# When will you start hosting?
I'll start having this hosted once we can add exercises to the project (even if that's just a JSON file or something you make yourself), and play through them.

# This is my scratch paper
Below is just some scratch for me to use. If you can see it, you're either very early to the project, checking the history, or I'm just super lazy! Probably the first one though.
## Fr fr scratch
- [ ] I need to do a canvas tutorial
- [ ] I need to create some logic for converting notes into fingerings (do I really, or is this just trumpet brain?)
- [ ] I need to figure out how I'm going to store the data for a song/exercise

## 2025-11-27
There will be a few parts. First, we need game logic separate from the canvas logic. We want to basically determine state from the logic at the beginning of every frame.

We will want to grow/change color of the circles when they're touched. That impllies that we'll want to move the color and size logic out of the regular initial config and have it in the actual circles themselves.

To change colors, I could have a "grow" function that loops through on every frame, limiting when the size gets too high.
