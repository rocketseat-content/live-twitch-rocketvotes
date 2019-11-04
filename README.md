<h2 align="center">Rocketvotes</h2>
<h3 align="center">Suggest and vote on any topics for Bootcamp Live Streams! 🚀</h3>

## Todo

- [x] Create back-end structure;
- [x] Authentication (Github OAuth);
- [x] Store users on database;
- [x] Store topics on database;
- [x] Create web interface;
- [ ] Add pagination and details page;
- [ ] Create front-end topic search;
- [ ] Contact front-end with updates;
- [ ] Create staging area;
- [ ] Setup CI
- [ ] Add backend tests

## Structure

### User

| Property name | Type       | Description                                     |
| ------------- | ---------- | ----------------------------------------------- |
| \_id          | _ObjectId_ | MongoDB unique ID.                              |
| githubId      | _string_   | Self descriptive.                               |
| email         | _string_   | The registered e-mail of user's GitHub account. |

### Topic

| Property name | Type       | Description                                     |
| ------------- | ---------- | ----------------------------------------------- |
| \_id          | _ObjectId_ | MongoDB unique ID.                              |
| name          | _string_   | Topic title.                                    |
| description   | _string_   | Topic presentation.                             |
| votes         | _[string]_ | A list of GitHub IDs, each being a single vote. |
