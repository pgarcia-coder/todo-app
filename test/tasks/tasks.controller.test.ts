import sinon from 'sinon';
import tasksService from '../../src/tasks/tasks.service';
import tasksController from '../../src/tasks/tasks.controller';
import { Task } from '../../src/tasks/task.interface';

describe('TasksController', () => {
  const sandbox = sinon.createSandbox();
  let findAllStub: sinon.SinonStub;

  beforeEach(() => {
    findAllStub = sandbox.stub(tasksService, 'findAll');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('listTasks', () => {
    it('should call find method', async () => {
      const response = [
        {
          _id: '6138e7e0191cd186cc000697',
          title: 'todo',
          description: 'something to do',
        },
      ] as Task[];

      findAllStub.resolves(response);

      await tasksController.listTasks({ search: 'text' });

      sandbox.assert.calledOnce(findAllStub);
    });
  });
});
