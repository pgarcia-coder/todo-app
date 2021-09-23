import newman from 'newman';
import collection from '../todo-app.postman_collection.json';

newman.run({ collection, reporters: 'cli' });
