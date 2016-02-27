# Monte Carlo Estimation
Estimate how long a new project will take based on historical team performance.

Online demo: [http://monte-carlo-estimation.meteor.com/](http://monte-carlo-estimation.meteor.com/)

It gives an objective view of the uncertainty around project estimation based on historical data.

This is a #noestimates technique!

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


Then press the **Simulate 10,000 times** button and the site will run 10,000 simulations and calculate a distribution reflecting the range and frequency of project durations.


## Notes

- You could alternatively use story points (or any other units) instead of number of stories.
- Sprint length is similarly arbitrary.
- Additional stories that occur due to scope expansion, and time diverted to other areas by the team is not reflected. You'll need to allow for that yourself.

## Dependencies
- [Meteor](https://www.meteor.com/)
- [Bootstrap](http://getbootstrap.com/)
- [Google charts API](https://chart.googleapis.com)


## Credits

I was introduced to Monte Carlo estimation by Adrian Fitolani. He has a [blog post](http://scrumage.com/blog/2015/09/agile-project-forecasting-the-monte-carlo-method/) with spreadsheet implementation and video documenting his approach. My method is simpler (no use of Takt time or re-sampling).

My frequent collaborator [Tim Newbold](skillfire.co/tim) got this project started and kicked off the coding.


## License

[CreativeCommons Attribution-ShareAlike-4.0](http://creativecommons.org/licenses/by-sa/4.0/)



