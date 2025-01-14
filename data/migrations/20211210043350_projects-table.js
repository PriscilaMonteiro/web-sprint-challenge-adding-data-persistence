/* eslint-disable no-undef */
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", function(table) {
      table.increments("project_id");
      table.string("project_name", 128).notNullable();
      table.text("project_description");
      table.boolean("project_completed").defaultTo(false);
    })

    .createTable("resources", function(table) {
      table.increments("resource_id");
      table
        .string("resource_name", 128)
        .notNullable()
        .unique()
      table.text("resource_description");
    })

    .createTable("tasks", function(table) {
      table.increments("task_id");
      table.string("task_description", 128).notNullable();
      table.text("task_notes");
      table.boolean("task_completed").defaultTo(false);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("project_resources", function(table) {
      table
        .increments("assignment_id");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });   
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};

