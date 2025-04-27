import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AiMatchController } from "../aiMatch.controller";
import { AiMatchService } from "../aiMatch.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  confidenceScore: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  matchedOn: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  confidenceScore: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  matchedOn: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    confidenceScore: 42.424242424,
    createdAt: new Date(),
    id: "exampleId",
    matchedOn: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  confidenceScore: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  matchedOn: new Date(),
  updatedAt: new Date(),
};

const service = {
  createAiMatch() {
    return CREATE_RESULT;
  },
  aiMatches: () => FIND_MANY_RESULT,
  aiMatch: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AiMatch", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AiMatchService,
          useValue: service,
        },
      ],
      controllers: [AiMatchController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /aiMatches", async () => {
    await request(app.getHttpServer())
      .post("/aiMatches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        matchedOn: CREATE_RESULT.matchedOn.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /aiMatches", async () => {
    await request(app.getHttpServer())
      .get("/aiMatches")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          matchedOn: FIND_MANY_RESULT[0].matchedOn.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /aiMatches/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/aiMatches"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /aiMatches/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/aiMatches"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        matchedOn: FIND_ONE_RESULT.matchedOn.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /aiMatches existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/aiMatches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        matchedOn: CREATE_RESULT.matchedOn.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/aiMatches")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
