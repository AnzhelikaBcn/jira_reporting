curl -H "Content-Type: application/json" -X POST --data '{ "client_id": "F258216C432845278F6D55B6B628762E","client_secret": "b9775f94fe578114a03c5509d31e772b4a978877fd5201f94c407683baab64b9" }'  https://xray.cloud.getxray.app/api/v2/authenticate

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiI1YmRiZTMwZi00NmJhLTM0NjQtYTJlNC1mN2M0YTM0OTNhZjQiLCJhY2NvdW50SWQiOiI3MTIwMjA6ZWJmMDRjMzQtMjc0Mi00ZTFhLThlNGItMWY0YWU2YzEyNzZhIiwiaXNYZWEiOmZhbHNlLCJpYXQiOjE3MDY5NjY4MzAsImV4cCI6MTcwNzA1MzIzMCwiYXVkIjoiRjI1ODIxNkM0MzI4NDUyNzhGNkQ1NUI2QjYyODc2MkUiLCJpc3MiOiJjb20ueHBhbmRpdC5wbHVnaW5zLnhyYXkiLCJzdWIiOiJGMjU4MjE2QzQzMjg0NTI3OEY2RDU1QjZCNjI4NzYyRSJ9.KCuahMhW36Tn4Vtlknbr69nRmjI9YUOS4FuUaoOrZ-g

curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiI1YmRiZTMwZi00NmJhLTM0NjQtYTJlNC1mN2M0YTM0OTNhZjQiLCJhY2NvdW50SWQiOiI3MTIwMjA6ZWJmMDRjMzQtMjc0Mi00ZTFhLThlNGItMWY0YWU2YzEyNzZhIiwiaXNYZWEiOmZhbHNlLCJpYXQiOjE3MDY5NjY4MzAsImV4cCI6MTcwNzA1MzIzMCwiYXVkIjoiRjI1ODIxNkM0MzI4NDUyNzhGNkQ1NUI2QjYyODc2MkUiLCJpc3MiOiJjb20ueHBhbmRpdC5wbHVnaW5zLnhyYXkiLCJzdWIiOiJGMjU4MjE2QzQzMjg0NTI3OEY2RDU1QjZCNjI4NzYyRSJ9.KCuahMhW36Tn4Vtlknbr69nRmjI9YUOS4FuUaoOrZ-g"  --data @"/Users/user/Desktop/___Testing/jira_reporting/test-results.xml" "https://xray.cloud.getxray.app/api/v2/import/execution/nunit?projectKey=JR"