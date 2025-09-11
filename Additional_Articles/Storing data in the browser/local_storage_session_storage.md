| Feature      | localStorage                                                | sessionStorage                                                     |
| ------------ | ----------------------------------------------------------- | ------------------------------------------------------------------ |
| Lifetime     | Stays **forever** (even after closing browser / restart OS) | Stays only until you close the tab                                 |
| Scope        | Shared across all tabs & windows of the same origin         | Works only in the current tab (shared with iframes of same origin) |
| Data size    | \~5MB or more                                               | \~5MB or more                                                      |
| Data sharing | Yes, across tabs                                            | No, only within the same tab                                       |
