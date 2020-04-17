
exports.up = function(knex) {
    return knex.schema
    // RESOURCES
    .createTable('resources', tbl => {
        //primary key
        tbl.increments();
        //name, string, unique, notNullable
        tbl.string('name')
            .unique()
            .notNullable()
            .index();
        //description, text, optional (not notNullable)
        tbl.text('description');
    })

    // PROJECTS
    .createTable('projects', tbl => {
        //primary id
        tbl.increments();
        //name, string, notNullable
        tbl.string('name')
            .notNullable();
        //description, text, optional 
        tbl.text('description');
        //completed, boolean, required, default is 0/false
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(0);
    })

    // PROJECT_RESOURCES
    .createTable('project_resources', tbl => {
        //primary key
        tbl.increments();
        //project_id, foreign key to project table, required
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        //resource_id, foreign key to resource table, required
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        //quantity, integer, notNullable, possibly default to 1
        tbl.integer('quantity')
            .notNullable()
            .defaultTo(1);
        //combo of project id & resource id should be unique, ex: tbl.unique(['student_id', 'cohort_id']);
        tbl.unique(['project_id', 'resource_id']);
    })

    // TASKS
    .createTable('tasks', tbl => {
        //primary key
        tbl.increments();
        //description, string, notNullable
        tbl.string('description')
            .notNullable();
        //notes, text, optional
        tbl.text('notes');
        //completed, boolean, required, default is 0/false
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(0);
        //project_id, foreign key to project table, notNullable
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
};
