import sinon from 'sinon';
import taskModel from '../../src/tasks/task.model';
import tasksService from '../../src/tasks/tasks.service';

describe('TasksService', () => {
  const sandbox = sinon.createSandbox();
  let findStub: sinon.SinonStub;

  beforeEach(() => {
    findStub = sandbox.stub(taskModel, 'find');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('findAll tasks', () => {
    it('should call find method', async () => {
      await tasksService.findAll({ search: 'text' });
      sandbox.assert.calledOnce(findStub);
    });
  });
});
