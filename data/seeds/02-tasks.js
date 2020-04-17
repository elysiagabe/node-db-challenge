//TASKS
//id (auto gen), description, notes, completed, project_id
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function() {
      return knex('tasks').insert([
        //project 1
        { description: 'Book conference venue', completed: 1, project_id: 1 },
        { description: 'Create invitee list', notes: 'We can have 500 people at the event. Typical attendance rate is 50%. Invite approximately 1000 of current & prospective clients.', completed: 1, project_id: 1 },
    
        //project 2
        { description: 'Select 10 service projects', notes: 'Include longer pro bono projects & one-day service projects', completed: 1, project_id: 2 },
        { description: 'Email employees project list choices', completed: 0, project_id: 2 },
        { description: 'Finalize volunteer lists', notes: 'Do not forget to send final list to partner orgs', completed: 0, project_id: 2 },
    
        //project 3
        { description: 'Write emails', completed: 0, project_id: 3 },
        { description: 'Set up automation rules', completed: 0, project_id: 3},
        { description: 'Turn on campaign', notes: 'Approximate implementation date is May 30, 2020', completed: 0, project_id: 3}
      ])
    })
}