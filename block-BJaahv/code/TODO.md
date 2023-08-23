# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object

```js
function getProject(){
  return this.noOfProjects;
}

function changeName(newName){
  return this.name = newName;
}

function incrementProject(value = 1){
  return this.noOfProjects = this.noOfProjects + value;
}

function decrementProject(value = 1){
  return this.noOfProjects = this.noOfProjects - value;
}

function createNew(name, id, noOfProjects){
  let object = {}
  object.name = name;
  object.id = id;
  object.noOfProjects = noOfProjects;
  object.getProject = getProject;
  object.changeName = changeName;
  object.incrementProject = incrementProject;
  object.decrementProject = decrementProject;
  return object
}
```
- [ ] Using Object.create (prototypal pattern)

```js
let methods = {
  getProject : function(){
  return this.noOfProjects;
  },
  changeName: function(newName){
  return this.name = newName;
  },
  incrementProject: function(value = 1){
  return this.noOfProjects = this.noOfProjects + value;
  },
  decrementProject: function(value = 1){
  return this.noOfProjects = this.noOfProjects - value;
  }
}

function createNew(name, id, noOfProjects){
  let object = Object.create(methods)
  object.name = name;
  object.id = id;
  object.noOfProjects = noOfProjects;
  return object
}
```
- [ ] Using Pseudoclassical Way
```js
createNew.prototype = {
  getProject : function(){
  return this.noOfProjects;
  },
  changeName: function(newName){
  return this.name = newName;
  },
  incrementProject: function(value = 1){
  return this.noOfProjects = this.noOfProjects + value;
  },
  decrementProject: function(value = 1){
  return this.noOfProjects = this.noOfProjects - value;
  }
}

function createNew(name, id, noOfProjects){
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}
```
- [ ] Using Class
```js
class create{
  constructor(name, id, noOfProjects){
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
  }
  getProject(){
  return this.noOfProjects;
  }
  changeName(newName){
  return this.name = newName;
  }
  incrementProject(value = 1){
  return this.noOfProjects = this.noOfProjects + value;
  }
  decrementProject(value = 1){
  return this.noOfProjects = this.noOfProjects - value;
  }
}

```


## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
