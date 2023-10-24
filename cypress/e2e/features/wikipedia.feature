Feature: Perform a google search.
Verify in which year the first automatic process was made.
And take a screenshot of the wikipedia page where the year appears.


Scenario: Googling and browsing wikipedia
    Given I as user enter to google
    When I search for the word automatizacion
    Then I verify the first date for automatizacion
    And I take a screenshot of the first automation page


