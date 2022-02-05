"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const seed_user_util_1 = require("./seed-user.util");
const user_service_1 = require("../../user/user.service");
let SeedService = class SeedService {
    constructor(userService) {
        this.userService = userService;
    }
    async startDevelopmentSeed() {
        await this.seedUsers();
    }
    async seedUsers() {
        const users = [...(0, seed_user_util_1.generateUsers)()];
        await Promise.all(users.map(async (user) => {
            await this.userService.addUser(user, false);
        }));
    }
};
SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], SeedService);
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map