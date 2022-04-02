/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/api/src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_controller_1 = __webpack_require__("./apps/api/src/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/api/src/app.service.ts");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const apollo_1 = __webpack_require__("@nestjs/apollo");
const path_1 = __webpack_require__("path");
const task_module_1 = __webpack_require__("./apps/api/src/task/task.module.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            task_module_1.TasksModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/todo')
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/task/task.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const task_resolver_1 = __webpack_require__("./apps/api/src/task/task.resolver.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const task_schema_1 = __webpack_require__("./apps/api/src/task/task.schema.ts");
const task_service_1 = __webpack_require__("./apps/api/src/task/task.service.ts");
let TasksModule = class TasksModule {
};
TasksModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: task_schema_1.Task.name, schema: task_schema_1.TasksSchema }])],
        providers: [task_resolver_1.TasksResolver, task_service_1.TasksService]
    })
], TasksModule);
exports.TasksModule = TasksModule;


/***/ }),

/***/ "./apps/api/src/task/task.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const task_schema_1 = __webpack_require__("./apps/api/src/task/task.schema.ts");
const task_service_1 = __webpack_require__("./apps/api/src/task/task.service.ts");
let TasksResolver = class TasksResolver {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    getTasks() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.tasksService.getTasks();
        });
    }
    getTask(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.tasksService.getTask(id);
        });
    }
    createTask(task) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.tasksService.createTask(task);
        });
    }
    updateTask(id, task) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.tasksService.updateTask(id, task);
        });
    }
    deleteTask(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.tasksService.deleteTask(id);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(() => [task_schema_1.Task]),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TasksResolver.prototype, "getTasks", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(() => task_schema_1.Task),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('input')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof task_schema_1.TaskId !== "undefined" && task_schema_1.TaskId) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TasksResolver.prototype, "getTask", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => task_schema_1.Task),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('input')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof task_schema_1.CreateTaskInput !== "undefined" && task_schema_1.CreateTaskInput) === "function" ? _b : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TasksResolver.prototype, "createTask", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => task_schema_1.Task),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('input')),
    (0, tslib_1.__param)(1, (0, graphql_1.Args)('input')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof task_schema_1.TaskId !== "undefined" && task_schema_1.TaskId) === "function" ? _c : Object, typeof (_d = typeof task_schema_1.UpdateTaskInput !== "undefined" && task_schema_1.UpdateTaskInput) === "function" ? _d : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TasksResolver.prototype, "updateTask", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => task_schema_1.Task),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('input')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_e = typeof task_schema_1.TaskId !== "undefined" && task_schema_1.TaskId) === "function" ? _e : Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TasksResolver.prototype, "deleteTask", null);
TasksResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_f = typeof task_service_1.TasksService !== "undefined" && task_service_1.TasksService) === "function" ? _f : Object])
], TasksResolver);
exports.TasksResolver = TasksResolver;


/***/ }),

/***/ "./apps/api/src/task/task.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksSchema = exports.UpdateTaskInput = exports.TaskId = exports.CreateTaskInput = exports.Task = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let Task = class Task {
};
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, tslib_1.__metadata)("design:type", Number)
], Task.prototype, "_id", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], Task.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], Task.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], Task.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Task.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Task.prototype, "endDate", void 0);
Task = (0, tslib_1.__decorate)([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)()
], Task);
exports.Task = Task;
let CreateTaskInput = class CreateTaskInput {
    constructor() {
        this.status = 'pending';
        this.startDate = new Date();
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, tslib_1.__metadata)("design:type", Number)
], CreateTaskInput.prototype, "_id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateTaskInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], CreateTaskInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], CreateTaskInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CreateTaskInput.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CreateTaskInput.prototype, "endDate", void 0);
CreateTaskInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], CreateTaskInput);
exports.CreateTaskInput = CreateTaskInput;
let TaskId = class TaskId {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, tslib_1.__metadata)("design:type", Number)
], TaskId.prototype, "_id", void 0);
TaskId = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], TaskId);
exports.TaskId = TaskId;
let UpdateTaskInput = class UpdateTaskInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, tslib_1.__metadata)("design:type", Number)
], UpdateTaskInput.prototype, "_id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UpdateTaskInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UpdateTaskInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UpdateTaskInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], UpdateTaskInput.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], UpdateTaskInput.prototype, "endDate", void 0);
UpdateTaskInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], UpdateTaskInput);
exports.UpdateTaskInput = UpdateTaskInput;
exports.TasksSchema = mongoose_1.SchemaFactory.createForClass(Task);


/***/ }),

/***/ "./apps/api/src/task/task.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksService = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("mongoose");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_2 = __webpack_require__("@nestjs/mongoose");
const task_schema_1 = __webpack_require__("./apps/api/src/task/task.schema.ts");
let TasksService = class TasksService {
    constructor(tasksModel) {
        this.tasksModel = tasksModel;
    }
    getTasks() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.tasksModel.find();
        });
    }
    getTask(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.tasksModel.findOne({ _id: id });
        });
    }
    createTask(task) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.tasksModel.create(task);
        });
    }
    updateTask(id, update) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.tasksModel.findOneAndUpdate({ _id: id }, update, {
                new: true
            });
        });
    }
    deleteTask(taskId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.tasksModel.findOneAndRemove({ _id: taskId });
        });
    }
};
TasksService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, mongoose_2.InjectModel)(task_schema_1.Task.name)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], TasksService);
exports.TasksService = TasksService;


/***/ }),

/***/ "@nestjs/apollo":
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/api/src/app.module.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 5000;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map