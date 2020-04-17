//Projects
//id (autogen), name, description, status
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function() {
      return knex('projects').insert([
        { name: 'Tech Conference', description: 'We will be holding our annual conference on January 2, 2020. Marketing team will be in charge, and others will be expected to attend and help as needed.', completed: 1 },
        { name: 'Company Volunteer Day', description: 'Teams will be participating in a variety of service projects in the month of April. Service days and longer projects will be available. Employees will select projects based on their availability and causes they care about. More info to come soon.', completed: 0 },
        { name: 'Implement automated onboarding email campaign', completed: 0 }
      ])
    })
}
