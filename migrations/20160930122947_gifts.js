exports.up = knex =>
    knex.schema.createTable('gifts', (table) => {
        table.increments();
        table.timestamps();
        table.string('image_url').notNullable();
        table.string('name').notNullable();
        table.integer('requested').notNullable();
        table.integer('price').notNullable();
        table.float('position').notNullable();
        table.integer('wedding_profile_id').references('wedding_profiles.id').notNullable();
    });

exports.down = knex => knex.schema.dropTable('gifts');
