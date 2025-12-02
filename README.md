# Monte Carlo Estimation
Estimate how long a new project will take based on historical team performance.

Online demo: [danprager.github.io/Monte-Carlo-Estimation](https://danprager.github.io/Monte-Carlo-Estimation/)

It gives an objective view of the uncertainty around project estimation based on historical data.

Despite having the word estimation in its title, this qualifies as a [#NoEstimates](http://neilkillick.com/category/noestimates/) technique!

The single file version is all in [index.html](https://github.com/danprager/Monte-Carlo-Estimation/blob/master/index.html).

## The Idea
I have a blog post called [The #NoEstimates game](https://agile-jitsu.blogspot.com/2016/04/the-noestimates-game.html) that will help you and your stakeholders understand what's really going on through explanation and a bunch of dice rolling! I recommend you play the manual game with stakeholders before using the tool in real projects.

## Usage

Enter the number of user stories completed by a team over a number of sprints, e.g.

| Sprint | Completed stories |
|--------|-------------------|
|   1    |         5         |
|   2    |         6         |
|   3    |         5         |
|   4    |         7         |
|   5    |         6         |
|   6    |         9         |
|   7    |        12         |
|   8    |         3         |
|   9    |         4         |
|  10    |         8         |

In the box **Completed stories in past sprints** you would enter
```
5 6 5 7 6 9 12 3 4 8
```

The other input is the number of stories in an upcoming project, say **85**. The tool is limited to between 1 and 1000 stories.


Then press the **Perform 10,000 simulations** button and the site will run 10,000 simulations (surprise!) and calculate a distribution reflecting the range and frequency of project durations.


## Notes

- You could alternatively use story points (or any other units) instead of number of stories, which would make this a #Estimates technique. ;-)
- Sprint length is similarly arbitrary.
- Additional stories that occur due to scope expansion, and time diverted to other areas by the team is not reflected. You'll need to allow for that yourself.

## Dependency
- [Chart.js](https://www.chartjs.org/)

## Credits

I was introduced to Monte Carlo estimation by Adrian Fittolani. He has a [blog post](http://scrumage.com/blog/2015/09/agile-project-forecasting-the-monte-carlo-method/) with spreadsheet implementation and video documenting his approach. My method is simpler (no use of Takt time or re-sampling).

My friend and sometime collaborator [Tim Newbold](https://www.linkedin.com/in/timnewbold/) got this project started and kicked off the coding in 2016. In 2025 I modernised and fixed it with Claude Sonnet 4.5, after persistent nudging from [Andrew Elms](https://www.linkedin.com/in/andrew-elms-7889a512a/).


## License

[CreativeCommons Attribution-ShareAlike-4.0](http://creativecommons.org/licenses/by-sa/4.0/)
