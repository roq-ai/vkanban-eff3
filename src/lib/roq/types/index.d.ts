/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model developer
 *
 */
export type developer = $Result.DefaultSelection<Prisma.$developerPayload>;
/**
 * Model kanban_board
 *
 */
export type kanban_board = $Result.DefaultSelection<Prisma.$kanban_boardPayload>;
/**
 * Model project
 *
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>;
/**
 * Model project_task
 *
 */
export type project_task = $Result.DefaultSelection<Prisma.$project_taskPayload>;
/**
 * Model task_status
 *
 */
export type task_status = $Result.DefaultSelection<Prisma.$task_statusPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.developer`: Exposes CRUD operations for the **developer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Developers
   * const developers = await prisma.developer.findMany()
   * ```
   */
  get developer(): Prisma.developerDelegate<ExtArgs>;

  /**
   * `prisma.kanban_board`: Exposes CRUD operations for the **kanban_board** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Kanban_boards
   * const kanban_boards = await prisma.kanban_board.findMany()
   * ```
   */
  get kanban_board(): Prisma.kanban_boardDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   */
  get project(): Prisma.projectDelegate<ExtArgs>;

  /**
   * `prisma.project_task`: Exposes CRUD operations for the **project_task** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Project_tasks
   * const project_tasks = await prisma.project_task.findMany()
   * ```
   */
  get project_task(): Prisma.project_taskDelegate<ExtArgs>;

  /**
   * `prisma.task_status`: Exposes CRUD operations for the **task_status** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Task_statuses
   * const task_statuses = await prisma.task_status.findMany()
   * ```
   */
  get task_status(): Prisma.task_statusDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    developer: 'developer';
    kanban_board: 'kanban_board';
    project: 'project';
    project_task: 'project_task';
    task_status: 'task_status';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'developer' | 'kanban_board' | 'project' | 'project_task' | 'task_status' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      developer: {
        payload: Prisma.$developerPayload<ExtArgs>;
        fields: Prisma.developerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.developerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$developerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.developerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$developerPayload>;
          };
          findFirst: {
            args: Prisma.developerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$developerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.developerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$developerPayload>;
          };
          findMany: {
            args: Prisma.developerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$developerPayload>[];
          };
          create: {
            args: Prisma.developerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$developerPayload>;
          };
          createMany: {
            args: Prisma.developerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.developerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$developerPayload>;
          };
          update: {
            args: Prisma.developerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$developerPayload>;
          };
          deleteMany: {
            args: Prisma.developerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.developerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.developerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$developerPayload>;
          };
          aggregate: {
            args: Prisma.DeveloperAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDeveloper>;
          };
          groupBy: {
            args: Prisma.developerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DeveloperGroupByOutputType>[];
          };
          count: {
            args: Prisma.developerCountArgs<ExtArgs>;
            result: $Utils.Optional<DeveloperCountAggregateOutputType> | number;
          };
        };
      };
      kanban_board: {
        payload: Prisma.$kanban_boardPayload<ExtArgs>;
        fields: Prisma.kanban_boardFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.kanban_boardFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$kanban_boardPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.kanban_boardFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$kanban_boardPayload>;
          };
          findFirst: {
            args: Prisma.kanban_boardFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$kanban_boardPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.kanban_boardFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$kanban_boardPayload>;
          };
          findMany: {
            args: Prisma.kanban_boardFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$kanban_boardPayload>[];
          };
          create: {
            args: Prisma.kanban_boardCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$kanban_boardPayload>;
          };
          createMany: {
            args: Prisma.kanban_boardCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.kanban_boardDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$kanban_boardPayload>;
          };
          update: {
            args: Prisma.kanban_boardUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$kanban_boardPayload>;
          };
          deleteMany: {
            args: Prisma.kanban_boardDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.kanban_boardUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.kanban_boardUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$kanban_boardPayload>;
          };
          aggregate: {
            args: Prisma.Kanban_boardAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateKanban_board>;
          };
          groupBy: {
            args: Prisma.kanban_boardGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Kanban_boardGroupByOutputType>[];
          };
          count: {
            args: Prisma.kanban_boardCountArgs<ExtArgs>;
            result: $Utils.Optional<Kanban_boardCountAggregateOutputType> | number;
          };
        };
      };
      project: {
        payload: Prisma.$projectPayload<ExtArgs>;
        fields: Prisma.projectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[];
          };
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProject>;
          };
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.projectCountArgs<ExtArgs>;
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number;
          };
        };
      };
      project_task: {
        payload: Prisma.$project_taskPayload<ExtArgs>;
        fields: Prisma.project_taskFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.project_taskFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$project_taskPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.project_taskFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$project_taskPayload>;
          };
          findFirst: {
            args: Prisma.project_taskFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$project_taskPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.project_taskFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$project_taskPayload>;
          };
          findMany: {
            args: Prisma.project_taskFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$project_taskPayload>[];
          };
          create: {
            args: Prisma.project_taskCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$project_taskPayload>;
          };
          createMany: {
            args: Prisma.project_taskCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.project_taskDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$project_taskPayload>;
          };
          update: {
            args: Prisma.project_taskUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$project_taskPayload>;
          };
          deleteMany: {
            args: Prisma.project_taskDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.project_taskUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.project_taskUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$project_taskPayload>;
          };
          aggregate: {
            args: Prisma.Project_taskAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProject_task>;
          };
          groupBy: {
            args: Prisma.project_taskGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Project_taskGroupByOutputType>[];
          };
          count: {
            args: Prisma.project_taskCountArgs<ExtArgs>;
            result: $Utils.Optional<Project_taskCountAggregateOutputType> | number;
          };
        };
      };
      task_status: {
        payload: Prisma.$task_statusPayload<ExtArgs>;
        fields: Prisma.task_statusFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.task_statusFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$task_statusPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.task_statusFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$task_statusPayload>;
          };
          findFirst: {
            args: Prisma.task_statusFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$task_statusPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.task_statusFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$task_statusPayload>;
          };
          findMany: {
            args: Prisma.task_statusFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$task_statusPayload>[];
          };
          create: {
            args: Prisma.task_statusCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$task_statusPayload>;
          };
          createMany: {
            args: Prisma.task_statusCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.task_statusDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$task_statusPayload>;
          };
          update: {
            args: Prisma.task_statusUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$task_statusPayload>;
          };
          deleteMany: {
            args: Prisma.task_statusDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.task_statusUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.task_statusUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$task_statusPayload>;
          };
          aggregate: {
            args: Prisma.Task_statusAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTask_status>;
          };
          groupBy: {
            args: Prisma.task_statusGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Task_statusGroupByOutputType>[];
          };
          count: {
            args: Prisma.task_statusCountArgs<ExtArgs>;
            result: $Utils.Optional<Task_statusCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    project: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | CompanyCountOutputTypeCountProjectArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProjectArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: projectWhereInput;
  };

  /**
   * Count Type DeveloperCountOutputType
   */

  export type DeveloperCountOutputType = {
    project_task: number;
  };

  export type DeveloperCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_task?: boolean | DeveloperCountOutputTypeCountProject_taskArgs;
  };

  // Custom InputTypes

  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the DeveloperCountOutputType
       */
      select?: DeveloperCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeCountProject_taskArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: project_taskWhereInput;
  };

  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    project_task: number;
  };

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_task?: boolean | ProjectCountOutputTypeCountProject_taskArgs;
  };

  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProject_taskArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: project_taskWhereInput;
  };

  /**
   * Count Type Project_taskCountOutputType
   */

  export type Project_taskCountOutputType = {
    task_status: number;
  };

  export type Project_taskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task_status?: boolean | Project_taskCountOutputTypeCountTask_statusArgs;
  };

  // Custom InputTypes

  /**
   * Project_taskCountOutputType without action
   */
  export type Project_taskCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project_taskCountOutputType
     */
    select?: Project_taskCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Project_taskCountOutputType without action
   */
  export type Project_taskCountOutputTypeCountTask_statusArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: task_statusWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    image: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    image: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      image?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      project?: boolean | company$projectArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    image?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | company$projectArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      project: Prisma.$projectPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        image: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends company$projectArgs<ExtArgs> = {}>(
      args?: Subset<T, company$projectArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly image: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.project
   */
  export type company$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    where?: projectWhereInput;
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    cursor?: projectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model developer
   */

  export type AggregateDeveloper = {
    _count: DeveloperCountAggregateOutputType | null;
    _avg: DeveloperAvgAggregateOutputType | null;
    _sum: DeveloperSumAggregateOutputType | null;
    _min: DeveloperMinAggregateOutputType | null;
    _max: DeveloperMaxAggregateOutputType | null;
  };

  export type DeveloperAvgAggregateOutputType = {
    years_of_experience: number | null;
  };

  export type DeveloperSumAggregateOutputType = {
    years_of_experience: number | null;
  };

  export type DeveloperMinAggregateOutputType = {
    id: string | null;
    project_role: string | null;
    programming_language: string | null;
    years_of_experience: number | null;
    name: string | null;
    email: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DeveloperMaxAggregateOutputType = {
    id: string | null;
    project_role: string | null;
    programming_language: string | null;
    years_of_experience: number | null;
    name: string | null;
    email: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DeveloperCountAggregateOutputType = {
    id: number;
    project_role: number;
    programming_language: number;
    years_of_experience: number;
    name: number;
    email: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DeveloperAvgAggregateInputType = {
    years_of_experience?: true;
  };

  export type DeveloperSumAggregateInputType = {
    years_of_experience?: true;
  };

  export type DeveloperMinAggregateInputType = {
    id?: true;
    project_role?: true;
    programming_language?: true;
    years_of_experience?: true;
    name?: true;
    email?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DeveloperMaxAggregateInputType = {
    id?: true;
    project_role?: true;
    programming_language?: true;
    years_of_experience?: true;
    name?: true;
    email?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DeveloperCountAggregateInputType = {
    id?: true;
    project_role?: true;
    programming_language?: true;
    years_of_experience?: true;
    name?: true;
    email?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DeveloperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which developer to aggregate.
     */
    where?: developerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of developers to fetch.
     */
    orderBy?: developerOrderByWithRelationInput | developerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: developerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` developers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` developers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned developers
     **/
    _count?: true | DeveloperCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: DeveloperAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: DeveloperSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DeveloperMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DeveloperMaxAggregateInputType;
  };

  export type GetDeveloperAggregateType<T extends DeveloperAggregateArgs> = {
    [P in keyof T & keyof AggregateDeveloper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeveloper[P]>
      : GetScalarType<T[P], AggregateDeveloper[P]>;
  };

  export type developerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: developerWhereInput;
    orderBy?: developerOrderByWithAggregationInput | developerOrderByWithAggregationInput[];
    by: DeveloperScalarFieldEnum[] | DeveloperScalarFieldEnum;
    having?: developerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeveloperCountAggregateInputType | true;
    _avg?: DeveloperAvgAggregateInputType;
    _sum?: DeveloperSumAggregateInputType;
    _min?: DeveloperMinAggregateInputType;
    _max?: DeveloperMaxAggregateInputType;
  };

  export type DeveloperGroupByOutputType = {
    id: string;
    project_role: string | null;
    programming_language: string | null;
    years_of_experience: number | null;
    name: string | null;
    email: string | null;
    created_at: Date;
    updated_at: Date;
    _count: DeveloperCountAggregateOutputType | null;
    _avg: DeveloperAvgAggregateOutputType | null;
    _sum: DeveloperSumAggregateOutputType | null;
    _min: DeveloperMinAggregateOutputType | null;
    _max: DeveloperMaxAggregateOutputType | null;
  };

  type GetDeveloperGroupByPayload<T extends developerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeveloperGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DeveloperGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DeveloperGroupByOutputType[P]>
          : GetScalarType<T[P], DeveloperGroupByOutputType[P]>;
      }
    >
  >;

  export type developerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        project_role?: boolean;
        programming_language?: boolean;
        years_of_experience?: boolean;
        name?: boolean;
        email?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        project_task?: boolean | developer$project_taskArgs<ExtArgs>;
        _count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['developer']
    >;

  export type developerSelectScalar = {
    id?: boolean;
    project_role?: boolean;
    programming_language?: boolean;
    years_of_experience?: boolean;
    name?: boolean;
    email?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type developerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_task?: boolean | developer$project_taskArgs<ExtArgs>;
    _count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $developerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'developer';
    objects: {
      project_task: Prisma.$project_taskPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        project_role: string | null;
        programming_language: string | null;
        years_of_experience: number | null;
        name: string | null;
        email: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['developer']
    >;
    composites: {};
  };

  type developerGetPayload<S extends boolean | null | undefined | developerDefaultArgs> = $Result.GetResult<
    Prisma.$developerPayload,
    S
  >;

  type developerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    developerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: DeveloperCountAggregateInputType | true;
  };

  export interface developerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['developer']; meta: { name: 'developer' } };
    /**
     * Find zero or one Developer that matches the filter.
     * @param {developerFindUniqueArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends developerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, developerFindUniqueArgs<ExtArgs>>,
    ): Prisma__developerClient<
      $Result.GetResult<Prisma.$developerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Developer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {developerFindUniqueOrThrowArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends developerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, developerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__developerClient<
      $Result.GetResult<Prisma.$developerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Developer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developerFindFirstArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends developerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, developerFindFirstArgs<ExtArgs>>,
    ): Prisma__developerClient<
      $Result.GetResult<Prisma.$developerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Developer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developerFindFirstOrThrowArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends developerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, developerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__developerClient<
      $Result.GetResult<Prisma.$developerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Developers
     * const developers = await prisma.developer.findMany()
     *
     * // Get first 10 Developers
     * const developers = await prisma.developer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const developerWithIdOnly = await prisma.developer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends developerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, developerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$developerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Developer.
     * @param {developerCreateArgs} args - Arguments to create a Developer.
     * @example
     * // Create one Developer
     * const Developer = await prisma.developer.create({
     *   data: {
     *     // ... data to create a Developer
     *   }
     * })
     *
     **/
    create<T extends developerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, developerCreateArgs<ExtArgs>>,
    ): Prisma__developerClient<$Result.GetResult<Prisma.$developerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Developers.
     *     @param {developerCreateManyArgs} args - Arguments to create many Developers.
     *     @example
     *     // Create many Developers
     *     const developer = await prisma.developer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends developerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, developerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Developer.
     * @param {developerDeleteArgs} args - Arguments to delete one Developer.
     * @example
     * // Delete one Developer
     * const Developer = await prisma.developer.delete({
     *   where: {
     *     // ... filter to delete one Developer
     *   }
     * })
     *
     **/
    delete<T extends developerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, developerDeleteArgs<ExtArgs>>,
    ): Prisma__developerClient<$Result.GetResult<Prisma.$developerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Developer.
     * @param {developerUpdateArgs} args - Arguments to update one Developer.
     * @example
     * // Update one Developer
     * const developer = await prisma.developer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends developerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, developerUpdateArgs<ExtArgs>>,
    ): Prisma__developerClient<$Result.GetResult<Prisma.$developerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Developers.
     * @param {developerDeleteManyArgs} args - Arguments to filter Developers to delete.
     * @example
     * // Delete a few Developers
     * const { count } = await prisma.developer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends developerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, developerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Developers
     * const developer = await prisma.developer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends developerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, developerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Developer.
     * @param {developerUpsertArgs} args - Arguments to update or create a Developer.
     * @example
     * // Update or create a Developer
     * const developer = await prisma.developer.upsert({
     *   create: {
     *     // ... data to create a Developer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Developer we want to update
     *   }
     * })
     **/
    upsert<T extends developerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, developerUpsertArgs<ExtArgs>>,
    ): Prisma__developerClient<$Result.GetResult<Prisma.$developerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developerCountArgs} args - Arguments to filter Developers to count.
     * @example
     * // Count the number of Developers
     * const count = await prisma.developer.count({
     *   where: {
     *     // ... the filter for the Developers we want to count
     *   }
     * })
     **/
    count<T extends developerCountArgs>(
      args?: Subset<T, developerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeveloperCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Developer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DeveloperAggregateArgs>(
      args: Subset<T, DeveloperAggregateArgs>,
    ): Prisma.PrismaPromise<GetDeveloperAggregateType<T>>;

    /**
     * Group by Developer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {developerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends developerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: developerGroupByArgs['orderBy'] }
        : { orderBy?: developerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, developerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDeveloperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the developer model
     */
    readonly fields: developerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for developer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__developerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project_task<T extends developer$project_taskArgs<ExtArgs> = {}>(
      args?: Subset<T, developer$project_taskArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the developer model
   */
  interface developerFieldRefs {
    readonly id: FieldRef<'developer', 'String'>;
    readonly project_role: FieldRef<'developer', 'String'>;
    readonly programming_language: FieldRef<'developer', 'String'>;
    readonly years_of_experience: FieldRef<'developer', 'Int'>;
    readonly name: FieldRef<'developer', 'String'>;
    readonly email: FieldRef<'developer', 'String'>;
    readonly created_at: FieldRef<'developer', 'DateTime'>;
    readonly updated_at: FieldRef<'developer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * developer findUnique
   */
  export type developerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the developer
     */
    select?: developerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developerInclude<ExtArgs> | null;
    /**
     * Filter, which developer to fetch.
     */
    where: developerWhereUniqueInput;
  };

  /**
   * developer findUniqueOrThrow
   */
  export type developerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the developer
     */
    select?: developerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developerInclude<ExtArgs> | null;
    /**
     * Filter, which developer to fetch.
     */
    where: developerWhereUniqueInput;
  };

  /**
   * developer findFirst
   */
  export type developerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the developer
     */
    select?: developerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developerInclude<ExtArgs> | null;
    /**
     * Filter, which developer to fetch.
     */
    where?: developerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of developers to fetch.
     */
    orderBy?: developerOrderByWithRelationInput | developerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for developers.
     */
    cursor?: developerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` developers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` developers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of developers.
     */
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[];
  };

  /**
   * developer findFirstOrThrow
   */
  export type developerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the developer
     */
    select?: developerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developerInclude<ExtArgs> | null;
    /**
     * Filter, which developer to fetch.
     */
    where?: developerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of developers to fetch.
     */
    orderBy?: developerOrderByWithRelationInput | developerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for developers.
     */
    cursor?: developerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` developers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` developers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of developers.
     */
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[];
  };

  /**
   * developer findMany
   */
  export type developerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the developer
     */
    select?: developerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developerInclude<ExtArgs> | null;
    /**
     * Filter, which developers to fetch.
     */
    where?: developerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of developers to fetch.
     */
    orderBy?: developerOrderByWithRelationInput | developerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing developers.
     */
    cursor?: developerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` developers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` developers.
     */
    skip?: number;
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[];
  };

  /**
   * developer create
   */
  export type developerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the developer
     */
    select?: developerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developerInclude<ExtArgs> | null;
    /**
     * The data needed to create a developer.
     */
    data?: XOR<developerCreateInput, developerUncheckedCreateInput>;
  };

  /**
   * developer createMany
   */
  export type developerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many developers.
     */
    data: developerCreateManyInput | developerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * developer update
   */
  export type developerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the developer
     */
    select?: developerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developerInclude<ExtArgs> | null;
    /**
     * The data needed to update a developer.
     */
    data: XOR<developerUpdateInput, developerUncheckedUpdateInput>;
    /**
     * Choose, which developer to update.
     */
    where: developerWhereUniqueInput;
  };

  /**
   * developer updateMany
   */
  export type developerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update developers.
     */
    data: XOR<developerUpdateManyMutationInput, developerUncheckedUpdateManyInput>;
    /**
     * Filter which developers to update
     */
    where?: developerWhereInput;
  };

  /**
   * developer upsert
   */
  export type developerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the developer
     */
    select?: developerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developerInclude<ExtArgs> | null;
    /**
     * The filter to search for the developer to update in case it exists.
     */
    where: developerWhereUniqueInput;
    /**
     * In case the developer found by the `where` argument doesn't exist, create a new developer with this data.
     */
    create: XOR<developerCreateInput, developerUncheckedCreateInput>;
    /**
     * In case the developer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<developerUpdateInput, developerUncheckedUpdateInput>;
  };

  /**
   * developer delete
   */
  export type developerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the developer
     */
    select?: developerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developerInclude<ExtArgs> | null;
    /**
     * Filter which developer to delete.
     */
    where: developerWhereUniqueInput;
  };

  /**
   * developer deleteMany
   */
  export type developerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which developers to delete
     */
    where?: developerWhereInput;
  };

  /**
   * developer.project_task
   */
  export type developer$project_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    where?: project_taskWhereInput;
    orderBy?: project_taskOrderByWithRelationInput | project_taskOrderByWithRelationInput[];
    cursor?: project_taskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Project_taskScalarFieldEnum | Project_taskScalarFieldEnum[];
  };

  /**
   * developer without action
   */
  export type developerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the developer
     */
    select?: developerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: developerInclude<ExtArgs> | null;
  };

  /**
   * Model kanban_board
   */

  export type AggregateKanban_board = {
    _count: Kanban_boardCountAggregateOutputType | null;
    _min: Kanban_boardMinAggregateOutputType | null;
    _max: Kanban_boardMaxAggregateOutputType | null;
  };

  export type Kanban_boardMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Kanban_boardMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Kanban_boardCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Kanban_boardMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Kanban_boardMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Kanban_boardCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Kanban_boardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kanban_board to aggregate.
     */
    where?: kanban_boardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of kanban_boards to fetch.
     */
    orderBy?: kanban_boardOrderByWithRelationInput | kanban_boardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: kanban_boardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` kanban_boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` kanban_boards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned kanban_boards
     **/
    _count?: true | Kanban_boardCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Kanban_boardMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Kanban_boardMaxAggregateInputType;
  };

  export type GetKanban_boardAggregateType<T extends Kanban_boardAggregateArgs> = {
    [P in keyof T & keyof AggregateKanban_board]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKanban_board[P]>
      : GetScalarType<T[P], AggregateKanban_board[P]>;
  };

  export type kanban_boardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kanban_boardWhereInput;
    orderBy?: kanban_boardOrderByWithAggregationInput | kanban_boardOrderByWithAggregationInput[];
    by: Kanban_boardScalarFieldEnum[] | Kanban_boardScalarFieldEnum;
    having?: kanban_boardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Kanban_boardCountAggregateInputType | true;
    _min?: Kanban_boardMinAggregateInputType;
    _max?: Kanban_boardMaxAggregateInputType;
  };

  export type Kanban_boardGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Kanban_boardCountAggregateOutputType | null;
    _min: Kanban_boardMinAggregateOutputType | null;
    _max: Kanban_boardMaxAggregateOutputType | null;
  };

  type GetKanban_boardGroupByPayload<T extends kanban_boardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Kanban_boardGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Kanban_boardGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Kanban_boardGroupByOutputType[P]>
          : GetScalarType<T[P], Kanban_boardGroupByOutputType[P]>;
      }
    >
  >;

  export type kanban_boardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['kanban_board']
    >;

  export type kanban_boardSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $kanban_boardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'kanban_board';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['kanban_board']
    >;
    composites: {};
  };

  type kanban_boardGetPayload<S extends boolean | null | undefined | kanban_boardDefaultArgs> = $Result.GetResult<
    Prisma.$kanban_boardPayload,
    S
  >;

  type kanban_boardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    kanban_boardFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Kanban_boardCountAggregateInputType | true;
  };

  export interface kanban_boardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kanban_board']; meta: { name: 'kanban_board' } };
    /**
     * Find zero or one Kanban_board that matches the filter.
     * @param {kanban_boardFindUniqueArgs} args - Arguments to find a Kanban_board
     * @example
     * // Get one Kanban_board
     * const kanban_board = await prisma.kanban_board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends kanban_boardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, kanban_boardFindUniqueArgs<ExtArgs>>,
    ): Prisma__kanban_boardClient<
      $Result.GetResult<Prisma.$kanban_boardPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Kanban_board that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {kanban_boardFindUniqueOrThrowArgs} args - Arguments to find a Kanban_board
     * @example
     * // Get one Kanban_board
     * const kanban_board = await prisma.kanban_board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends kanban_boardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kanban_boardFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__kanban_boardClient<
      $Result.GetResult<Prisma.$kanban_boardPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Kanban_board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kanban_boardFindFirstArgs} args - Arguments to find a Kanban_board
     * @example
     * // Get one Kanban_board
     * const kanban_board = await prisma.kanban_board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends kanban_boardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, kanban_boardFindFirstArgs<ExtArgs>>,
    ): Prisma__kanban_boardClient<
      $Result.GetResult<Prisma.$kanban_boardPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Kanban_board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kanban_boardFindFirstOrThrowArgs} args - Arguments to find a Kanban_board
     * @example
     * // Get one Kanban_board
     * const kanban_board = await prisma.kanban_board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends kanban_boardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kanban_boardFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__kanban_boardClient<
      $Result.GetResult<Prisma.$kanban_boardPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Kanban_boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kanban_boardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kanban_boards
     * const kanban_boards = await prisma.kanban_board.findMany()
     *
     * // Get first 10 Kanban_boards
     * const kanban_boards = await prisma.kanban_board.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const kanban_boardWithIdOnly = await prisma.kanban_board.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends kanban_boardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kanban_boardFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kanban_boardPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Kanban_board.
     * @param {kanban_boardCreateArgs} args - Arguments to create a Kanban_board.
     * @example
     * // Create one Kanban_board
     * const Kanban_board = await prisma.kanban_board.create({
     *   data: {
     *     // ... data to create a Kanban_board
     *   }
     * })
     *
     **/
    create<T extends kanban_boardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, kanban_boardCreateArgs<ExtArgs>>,
    ): Prisma__kanban_boardClient<$Result.GetResult<Prisma.$kanban_boardPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Kanban_boards.
     *     @param {kanban_boardCreateManyArgs} args - Arguments to create many Kanban_boards.
     *     @example
     *     // Create many Kanban_boards
     *     const kanban_board = await prisma.kanban_board.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends kanban_boardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kanban_boardCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Kanban_board.
     * @param {kanban_boardDeleteArgs} args - Arguments to delete one Kanban_board.
     * @example
     * // Delete one Kanban_board
     * const Kanban_board = await prisma.kanban_board.delete({
     *   where: {
     *     // ... filter to delete one Kanban_board
     *   }
     * })
     *
     **/
    delete<T extends kanban_boardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, kanban_boardDeleteArgs<ExtArgs>>,
    ): Prisma__kanban_boardClient<$Result.GetResult<Prisma.$kanban_boardPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Kanban_board.
     * @param {kanban_boardUpdateArgs} args - Arguments to update one Kanban_board.
     * @example
     * // Update one Kanban_board
     * const kanban_board = await prisma.kanban_board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends kanban_boardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, kanban_boardUpdateArgs<ExtArgs>>,
    ): Prisma__kanban_boardClient<$Result.GetResult<Prisma.$kanban_boardPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Kanban_boards.
     * @param {kanban_boardDeleteManyArgs} args - Arguments to filter Kanban_boards to delete.
     * @example
     * // Delete a few Kanban_boards
     * const { count } = await prisma.kanban_board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends kanban_boardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kanban_boardDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Kanban_boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kanban_boardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kanban_boards
     * const kanban_board = await prisma.kanban_board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends kanban_boardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, kanban_boardUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Kanban_board.
     * @param {kanban_boardUpsertArgs} args - Arguments to update or create a Kanban_board.
     * @example
     * // Update or create a Kanban_board
     * const kanban_board = await prisma.kanban_board.upsert({
     *   create: {
     *     // ... data to create a Kanban_board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kanban_board we want to update
     *   }
     * })
     **/
    upsert<T extends kanban_boardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, kanban_boardUpsertArgs<ExtArgs>>,
    ): Prisma__kanban_boardClient<$Result.GetResult<Prisma.$kanban_boardPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Kanban_boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kanban_boardCountArgs} args - Arguments to filter Kanban_boards to count.
     * @example
     * // Count the number of Kanban_boards
     * const count = await prisma.kanban_board.count({
     *   where: {
     *     // ... the filter for the Kanban_boards we want to count
     *   }
     * })
     **/
    count<T extends kanban_boardCountArgs>(
      args?: Subset<T, kanban_boardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Kanban_boardCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Kanban_board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kanban_boardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Kanban_boardAggregateArgs>(
      args: Subset<T, Kanban_boardAggregateArgs>,
    ): Prisma.PrismaPromise<GetKanban_boardAggregateType<T>>;

    /**
     * Group by Kanban_board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kanban_boardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends kanban_boardGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kanban_boardGroupByArgs['orderBy'] }
        : { orderBy?: kanban_boardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, kanban_boardGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetKanban_boardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the kanban_board model
     */
    readonly fields: kanban_boardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kanban_board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kanban_boardClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the kanban_board model
   */
  interface kanban_boardFieldRefs {
    readonly id: FieldRef<'kanban_board', 'String'>;
    readonly created_at: FieldRef<'kanban_board', 'DateTime'>;
    readonly updated_at: FieldRef<'kanban_board', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * kanban_board findUnique
   */
  export type kanban_boardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kanban_board
     */
    select?: kanban_boardSelect<ExtArgs> | null;
    /**
     * Filter, which kanban_board to fetch.
     */
    where: kanban_boardWhereUniqueInput;
  };

  /**
   * kanban_board findUniqueOrThrow
   */
  export type kanban_boardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kanban_board
     */
    select?: kanban_boardSelect<ExtArgs> | null;
    /**
     * Filter, which kanban_board to fetch.
     */
    where: kanban_boardWhereUniqueInput;
  };

  /**
   * kanban_board findFirst
   */
  export type kanban_boardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kanban_board
     */
    select?: kanban_boardSelect<ExtArgs> | null;
    /**
     * Filter, which kanban_board to fetch.
     */
    where?: kanban_boardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of kanban_boards to fetch.
     */
    orderBy?: kanban_boardOrderByWithRelationInput | kanban_boardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for kanban_boards.
     */
    cursor?: kanban_boardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` kanban_boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` kanban_boards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of kanban_boards.
     */
    distinct?: Kanban_boardScalarFieldEnum | Kanban_boardScalarFieldEnum[];
  };

  /**
   * kanban_board findFirstOrThrow
   */
  export type kanban_boardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kanban_board
     */
    select?: kanban_boardSelect<ExtArgs> | null;
    /**
     * Filter, which kanban_board to fetch.
     */
    where?: kanban_boardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of kanban_boards to fetch.
     */
    orderBy?: kanban_boardOrderByWithRelationInput | kanban_boardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for kanban_boards.
     */
    cursor?: kanban_boardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` kanban_boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` kanban_boards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of kanban_boards.
     */
    distinct?: Kanban_boardScalarFieldEnum | Kanban_boardScalarFieldEnum[];
  };

  /**
   * kanban_board findMany
   */
  export type kanban_boardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kanban_board
     */
    select?: kanban_boardSelect<ExtArgs> | null;
    /**
     * Filter, which kanban_boards to fetch.
     */
    where?: kanban_boardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of kanban_boards to fetch.
     */
    orderBy?: kanban_boardOrderByWithRelationInput | kanban_boardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing kanban_boards.
     */
    cursor?: kanban_boardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` kanban_boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` kanban_boards.
     */
    skip?: number;
    distinct?: Kanban_boardScalarFieldEnum | Kanban_boardScalarFieldEnum[];
  };

  /**
   * kanban_board create
   */
  export type kanban_boardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kanban_board
     */
    select?: kanban_boardSelect<ExtArgs> | null;
    /**
     * The data needed to create a kanban_board.
     */
    data?: XOR<kanban_boardCreateInput, kanban_boardUncheckedCreateInput>;
  };

  /**
   * kanban_board createMany
   */
  export type kanban_boardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kanban_boards.
     */
    data: kanban_boardCreateManyInput | kanban_boardCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * kanban_board update
   */
  export type kanban_boardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kanban_board
     */
    select?: kanban_boardSelect<ExtArgs> | null;
    /**
     * The data needed to update a kanban_board.
     */
    data: XOR<kanban_boardUpdateInput, kanban_boardUncheckedUpdateInput>;
    /**
     * Choose, which kanban_board to update.
     */
    where: kanban_boardWhereUniqueInput;
  };

  /**
   * kanban_board updateMany
   */
  export type kanban_boardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kanban_boards.
     */
    data: XOR<kanban_boardUpdateManyMutationInput, kanban_boardUncheckedUpdateManyInput>;
    /**
     * Filter which kanban_boards to update
     */
    where?: kanban_boardWhereInput;
  };

  /**
   * kanban_board upsert
   */
  export type kanban_boardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kanban_board
     */
    select?: kanban_boardSelect<ExtArgs> | null;
    /**
     * The filter to search for the kanban_board to update in case it exists.
     */
    where: kanban_boardWhereUniqueInput;
    /**
     * In case the kanban_board found by the `where` argument doesn't exist, create a new kanban_board with this data.
     */
    create: XOR<kanban_boardCreateInput, kanban_boardUncheckedCreateInput>;
    /**
     * In case the kanban_board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kanban_boardUpdateInput, kanban_boardUncheckedUpdateInput>;
  };

  /**
   * kanban_board delete
   */
  export type kanban_boardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kanban_board
     */
    select?: kanban_boardSelect<ExtArgs> | null;
    /**
     * Filter which kanban_board to delete.
     */
    where: kanban_boardWhereUniqueInput;
  };

  /**
   * kanban_board deleteMany
   */
  export type kanban_boardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kanban_boards to delete
     */
    where?: kanban_boardWhereInput;
  };

  /**
   * kanban_board without action
   */
  export type kanban_boardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kanban_board
     */
    select?: kanban_boardSelect<ExtArgs> | null;
  };

  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _avg: ProjectAvgAggregateOutputType | null;
    _sum: ProjectSumAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  export type ProjectAvgAggregateOutputType = {
    service_case: number | null;
  };

  export type ProjectSumAggregateOutputType = {
    service_case: number | null;
  };

  export type ProjectMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    service_case: number | null;
    company_id: string | null;
    required_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProjectMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    service_case: number | null;
    company_id: string | null;
    required_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProjectCountAggregateOutputType = {
    id: number;
    description: number;
    service_case: number;
    company_id: number;
    required_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProjectAvgAggregateInputType = {
    service_case?: true;
  };

  export type ProjectSumAggregateInputType = {
    service_case?: true;
  };

  export type ProjectMinAggregateInputType = {
    id?: true;
    description?: true;
    service_case?: true;
    company_id?: true;
    required_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProjectMaxAggregateInputType = {
    id?: true;
    description?: true;
    service_case?: true;
    company_id?: true;
    required_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProjectCountAggregateInputType = {
    id?: true;
    description?: true;
    service_case?: true;
    company_id?: true;
    required_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned projects
     **/
    _count?: true | ProjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProjectAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProjectSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMaxAggregateInputType;
  };

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>;
  };

  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput;
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[];
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum;
    having?: projectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _avg?: ProjectAvgAggregateInputType;
    _sum?: ProjectSumAggregateInputType;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
  };

  export type ProjectGroupByOutputType = {
    id: string;
    description: string;
    service_case: number;
    company_id: string;
    required_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: ProjectCountAggregateOutputType | null;
    _avg: ProjectAvgAggregateOutputType | null;
    _sum: ProjectSumAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProjectGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
          : GetScalarType<T[P], ProjectGroupByOutputType[P]>;
      }
    >
  >;

  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      service_case?: boolean;
      company_id?: boolean;
      required_date?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      project_task?: boolean | project$project_taskArgs<ExtArgs>;
      _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['project']
  >;

  export type projectSelectScalar = {
    id?: boolean;
    description?: boolean;
    service_case?: boolean;
    company_id?: boolean;
    required_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    project_task?: boolean | project$project_taskArgs<ExtArgs>;
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'project';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      project_task: Prisma.$project_taskPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string;
        service_case: number;
        company_id: string;
        required_date: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['project']
    >;
    composites: {};
  };

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<
    Prisma.$projectPayload,
    S
  >;

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    projectFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ProjectCountAggregateInputType | true;
  };

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project']; meta: { name: 'project' } };
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends projectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends projectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends projectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     **/
    create<T extends projectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, projectCreateArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Projects.
     *     @param {projectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends projectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     **/
    delete<T extends projectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, projectDeleteArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends projectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends projectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends projectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     **/
    upsert<T extends projectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpsertArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
     **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProjectAggregateArgs>(
      args: Subset<T, ProjectAggregateArgs>,
    ): Prisma.PrismaPromise<GetProjectAggregateType<T>>;

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the project model
     */
    readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    project_task<T extends project$project_taskArgs<ExtArgs> = {}>(
      args?: Subset<T, project$project_taskArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<'project', 'String'>;
    readonly description: FieldRef<'project', 'String'>;
    readonly service_case: FieldRef<'project', 'Int'>;
    readonly company_id: FieldRef<'project', 'String'>;
    readonly required_date: FieldRef<'project', 'DateTime'>;
    readonly created_at: FieldRef<'project', 'DateTime'>;
    readonly updated_at: FieldRef<'project', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>;
  };

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>;
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput;
  };

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput;
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>;
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
  };

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput;
  };

  /**
   * project.project_task
   */
  export type project$project_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    where?: project_taskWhereInput;
    orderBy?: project_taskOrderByWithRelationInput | project_taskOrderByWithRelationInput[];
    cursor?: project_taskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Project_taskScalarFieldEnum | Project_taskScalarFieldEnum[];
  };

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
  };

  /**
   * Model project_task
   */

  export type AggregateProject_task = {
    _count: Project_taskCountAggregateOutputType | null;
    _min: Project_taskMinAggregateOutputType | null;
    _max: Project_taskMaxAggregateOutputType | null;
  };

  export type Project_taskMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    required_date: Date | null;
    project_id: string | null;
    status: string | null;
    document_file: string | null;
    started: Date | null;
    developer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Project_taskMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    required_date: Date | null;
    project_id: string | null;
    status: string | null;
    document_file: string | null;
    started: Date | null;
    developer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Project_taskCountAggregateOutputType = {
    id: number;
    description: number;
    required_date: number;
    project_id: number;
    status: number;
    document_file: number;
    started: number;
    developer_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Project_taskMinAggregateInputType = {
    id?: true;
    description?: true;
    required_date?: true;
    project_id?: true;
    status?: true;
    document_file?: true;
    started?: true;
    developer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Project_taskMaxAggregateInputType = {
    id?: true;
    description?: true;
    required_date?: true;
    project_id?: true;
    status?: true;
    document_file?: true;
    started?: true;
    developer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Project_taskCountAggregateInputType = {
    id?: true;
    description?: true;
    required_date?: true;
    project_id?: true;
    status?: true;
    document_file?: true;
    started?: true;
    developer_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Project_taskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_task to aggregate.
     */
    where?: project_taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of project_tasks to fetch.
     */
    orderBy?: project_taskOrderByWithRelationInput | project_taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: project_taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` project_tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` project_tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned project_tasks
     **/
    _count?: true | Project_taskCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Project_taskMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Project_taskMaxAggregateInputType;
  };

  export type GetProject_taskAggregateType<T extends Project_taskAggregateArgs> = {
    [P in keyof T & keyof AggregateProject_task]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_task[P]>
      : GetScalarType<T[P], AggregateProject_task[P]>;
  };

  export type project_taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_taskWhereInput;
    orderBy?: project_taskOrderByWithAggregationInput | project_taskOrderByWithAggregationInput[];
    by: Project_taskScalarFieldEnum[] | Project_taskScalarFieldEnum;
    having?: project_taskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Project_taskCountAggregateInputType | true;
    _min?: Project_taskMinAggregateInputType;
    _max?: Project_taskMaxAggregateInputType;
  };

  export type Project_taskGroupByOutputType = {
    id: string;
    description: string;
    required_date: Date | null;
    project_id: string;
    status: string;
    document_file: string | null;
    started: Date;
    developer_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Project_taskCountAggregateOutputType | null;
    _min: Project_taskMinAggregateOutputType | null;
    _max: Project_taskMaxAggregateOutputType | null;
  };

  type GetProject_taskGroupByPayload<T extends project_taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_taskGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Project_taskGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Project_taskGroupByOutputType[P]>
          : GetScalarType<T[P], Project_taskGroupByOutputType[P]>;
      }
    >
  >;

  export type project_taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        required_date?: boolean;
        project_id?: boolean;
        status?: boolean;
        document_file?: boolean;
        started?: boolean;
        developer_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        developer?: boolean | developerDefaultArgs<ExtArgs>;
        project?: boolean | projectDefaultArgs<ExtArgs>;
        task_status?: boolean | project_task$task_statusArgs<ExtArgs>;
        _count?: boolean | Project_taskCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['project_task']
    >;

  export type project_taskSelectScalar = {
    id?: boolean;
    description?: boolean;
    required_date?: boolean;
    project_id?: boolean;
    status?: boolean;
    document_file?: boolean;
    started?: boolean;
    developer_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type project_taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    developer?: boolean | developerDefaultArgs<ExtArgs>;
    project?: boolean | projectDefaultArgs<ExtArgs>;
    task_status?: boolean | project_task$task_statusArgs<ExtArgs>;
    _count?: boolean | Project_taskCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $project_taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'project_task';
    objects: {
      developer: Prisma.$developerPayload<ExtArgs>;
      project: Prisma.$projectPayload<ExtArgs>;
      task_status: Prisma.$task_statusPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string;
        required_date: Date | null;
        project_id: string;
        status: string;
        document_file: string | null;
        started: Date;
        developer_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['project_task']
    >;
    composites: {};
  };

  type project_taskGetPayload<S extends boolean | null | undefined | project_taskDefaultArgs> = $Result.GetResult<
    Prisma.$project_taskPayload,
    S
  >;

  type project_taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    project_taskFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Project_taskCountAggregateInputType | true;
  };

  export interface project_taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_task']; meta: { name: 'project_task' } };
    /**
     * Find zero or one Project_task that matches the filter.
     * @param {project_taskFindUniqueArgs} args - Arguments to find a Project_task
     * @example
     * // Get one Project_task
     * const project_task = await prisma.project_task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends project_taskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, project_taskFindUniqueArgs<ExtArgs>>,
    ): Prisma__project_taskClient<
      $Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Project_task that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {project_taskFindUniqueOrThrowArgs} args - Arguments to find a Project_task
     * @example
     * // Get one Project_task
     * const project_task = await prisma.project_task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends project_taskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, project_taskFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__project_taskClient<
      $Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Project_task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_taskFindFirstArgs} args - Arguments to find a Project_task
     * @example
     * // Get one Project_task
     * const project_task = await prisma.project_task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends project_taskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, project_taskFindFirstArgs<ExtArgs>>,
    ): Prisma__project_taskClient<
      $Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Project_task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_taskFindFirstOrThrowArgs} args - Arguments to find a Project_task
     * @example
     * // Get one Project_task
     * const project_task = await prisma.project_task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends project_taskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, project_taskFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__project_taskClient<
      $Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Project_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_taskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_tasks
     * const project_tasks = await prisma.project_task.findMany()
     *
     * // Get first 10 Project_tasks
     * const project_tasks = await prisma.project_task.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const project_taskWithIdOnly = await prisma.project_task.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends project_taskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, project_taskFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Project_task.
     * @param {project_taskCreateArgs} args - Arguments to create a Project_task.
     * @example
     * // Create one Project_task
     * const Project_task = await prisma.project_task.create({
     *   data: {
     *     // ... data to create a Project_task
     *   }
     * })
     *
     **/
    create<T extends project_taskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, project_taskCreateArgs<ExtArgs>>,
    ): Prisma__project_taskClient<$Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Project_tasks.
     *     @param {project_taskCreateManyArgs} args - Arguments to create many Project_tasks.
     *     @example
     *     // Create many Project_tasks
     *     const project_task = await prisma.project_task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends project_taskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, project_taskCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Project_task.
     * @param {project_taskDeleteArgs} args - Arguments to delete one Project_task.
     * @example
     * // Delete one Project_task
     * const Project_task = await prisma.project_task.delete({
     *   where: {
     *     // ... filter to delete one Project_task
     *   }
     * })
     *
     **/
    delete<T extends project_taskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, project_taskDeleteArgs<ExtArgs>>,
    ): Prisma__project_taskClient<$Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Project_task.
     * @param {project_taskUpdateArgs} args - Arguments to update one Project_task.
     * @example
     * // Update one Project_task
     * const project_task = await prisma.project_task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends project_taskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, project_taskUpdateArgs<ExtArgs>>,
    ): Prisma__project_taskClient<$Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Project_tasks.
     * @param {project_taskDeleteManyArgs} args - Arguments to filter Project_tasks to delete.
     * @example
     * // Delete a few Project_tasks
     * const { count } = await prisma.project_task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends project_taskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, project_taskDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Project_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_tasks
     * const project_task = await prisma.project_task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends project_taskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, project_taskUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Project_task.
     * @param {project_taskUpsertArgs} args - Arguments to update or create a Project_task.
     * @example
     * // Update or create a Project_task
     * const project_task = await prisma.project_task.upsert({
     *   create: {
     *     // ... data to create a Project_task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_task we want to update
     *   }
     * })
     **/
    upsert<T extends project_taskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, project_taskUpsertArgs<ExtArgs>>,
    ): Prisma__project_taskClient<$Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Project_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_taskCountArgs} args - Arguments to filter Project_tasks to count.
     * @example
     * // Count the number of Project_tasks
     * const count = await prisma.project_task.count({
     *   where: {
     *     // ... the filter for the Project_tasks we want to count
     *   }
     * })
     **/
    count<T extends project_taskCountArgs>(
      args?: Subset<T, project_taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_taskCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Project_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_taskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Project_taskAggregateArgs>(
      args: Subset<T, Project_taskAggregateArgs>,
    ): Prisma.PrismaPromise<GetProject_taskAggregateType<T>>;

    /**
     * Group by Project_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends project_taskGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_taskGroupByArgs['orderBy'] }
        : { orderBy?: project_taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, project_taskGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProject_taskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the project_task model
     */
    readonly fields: project_taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_taskClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    developer<T extends developerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, developerDefaultArgs<ExtArgs>>,
    ): Prisma__developerClient<
      $Result.GetResult<Prisma.$developerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    project<T extends projectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, projectDefaultArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    task_status<T extends project_task$task_statusArgs<ExtArgs> = {}>(
      args?: Subset<T, project_task$task_statusArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_statusPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the project_task model
   */
  interface project_taskFieldRefs {
    readonly id: FieldRef<'project_task', 'String'>;
    readonly description: FieldRef<'project_task', 'String'>;
    readonly required_date: FieldRef<'project_task', 'DateTime'>;
    readonly project_id: FieldRef<'project_task', 'String'>;
    readonly status: FieldRef<'project_task', 'String'>;
    readonly document_file: FieldRef<'project_task', 'String'>;
    readonly started: FieldRef<'project_task', 'DateTime'>;
    readonly developer_id: FieldRef<'project_task', 'String'>;
    readonly created_at: FieldRef<'project_task', 'DateTime'>;
    readonly updated_at: FieldRef<'project_task', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * project_task findUnique
   */
  export type project_taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    /**
     * Filter, which project_task to fetch.
     */
    where: project_taskWhereUniqueInput;
  };

  /**
   * project_task findUniqueOrThrow
   */
  export type project_taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    /**
     * Filter, which project_task to fetch.
     */
    where: project_taskWhereUniqueInput;
  };

  /**
   * project_task findFirst
   */
  export type project_taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    /**
     * Filter, which project_task to fetch.
     */
    where?: project_taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of project_tasks to fetch.
     */
    orderBy?: project_taskOrderByWithRelationInput | project_taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for project_tasks.
     */
    cursor?: project_taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` project_tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` project_tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of project_tasks.
     */
    distinct?: Project_taskScalarFieldEnum | Project_taskScalarFieldEnum[];
  };

  /**
   * project_task findFirstOrThrow
   */
  export type project_taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    /**
     * Filter, which project_task to fetch.
     */
    where?: project_taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of project_tasks to fetch.
     */
    orderBy?: project_taskOrderByWithRelationInput | project_taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for project_tasks.
     */
    cursor?: project_taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` project_tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` project_tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of project_tasks.
     */
    distinct?: Project_taskScalarFieldEnum | Project_taskScalarFieldEnum[];
  };

  /**
   * project_task findMany
   */
  export type project_taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    /**
     * Filter, which project_tasks to fetch.
     */
    where?: project_taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of project_tasks to fetch.
     */
    orderBy?: project_taskOrderByWithRelationInput | project_taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing project_tasks.
     */
    cursor?: project_taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` project_tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` project_tasks.
     */
    skip?: number;
    distinct?: Project_taskScalarFieldEnum | Project_taskScalarFieldEnum[];
  };

  /**
   * project_task create
   */
  export type project_taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    /**
     * The data needed to create a project_task.
     */
    data: XOR<project_taskCreateInput, project_taskUncheckedCreateInput>;
  };

  /**
   * project_task createMany
   */
  export type project_taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_tasks.
     */
    data: project_taskCreateManyInput | project_taskCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * project_task update
   */
  export type project_taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    /**
     * The data needed to update a project_task.
     */
    data: XOR<project_taskUpdateInput, project_taskUncheckedUpdateInput>;
    /**
     * Choose, which project_task to update.
     */
    where: project_taskWhereUniqueInput;
  };

  /**
   * project_task updateMany
   */
  export type project_taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_tasks.
     */
    data: XOR<project_taskUpdateManyMutationInput, project_taskUncheckedUpdateManyInput>;
    /**
     * Filter which project_tasks to update
     */
    where?: project_taskWhereInput;
  };

  /**
   * project_task upsert
   */
  export type project_taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    /**
     * The filter to search for the project_task to update in case it exists.
     */
    where: project_taskWhereUniqueInput;
    /**
     * In case the project_task found by the `where` argument doesn't exist, create a new project_task with this data.
     */
    create: XOR<project_taskCreateInput, project_taskUncheckedCreateInput>;
    /**
     * In case the project_task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_taskUpdateInput, project_taskUncheckedUpdateInput>;
  };

  /**
   * project_task delete
   */
  export type project_taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
    /**
     * Filter which project_task to delete.
     */
    where: project_taskWhereUniqueInput;
  };

  /**
   * project_task deleteMany
   */
  export type project_taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_tasks to delete
     */
    where?: project_taskWhereInput;
  };

  /**
   * project_task.task_status
   */
  export type project_task$task_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
    where?: task_statusWhereInput;
    orderBy?: task_statusOrderByWithRelationInput | task_statusOrderByWithRelationInput[];
    cursor?: task_statusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Task_statusScalarFieldEnum | Task_statusScalarFieldEnum[];
  };

  /**
   * project_task without action
   */
  export type project_taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_task
     */
    select?: project_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: project_taskInclude<ExtArgs> | null;
  };

  /**
   * Model task_status
   */

  export type AggregateTask_status = {
    _count: Task_statusCountAggregateOutputType | null;
    _min: Task_statusMinAggregateOutputType | null;
    _max: Task_statusMaxAggregateOutputType | null;
  };

  export type Task_statusMinAggregateOutputType = {
    id: string | null;
    status: string | null;
    project_task_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Task_statusMaxAggregateOutputType = {
    id: string | null;
    status: string | null;
    project_task_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Task_statusCountAggregateOutputType = {
    id: number;
    status: number;
    project_task_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Task_statusMinAggregateInputType = {
    id?: true;
    status?: true;
    project_task_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Task_statusMaxAggregateInputType = {
    id?: true;
    status?: true;
    project_task_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Task_statusCountAggregateInputType = {
    id?: true;
    status?: true;
    project_task_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Task_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_status to aggregate.
     */
    where?: task_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of task_statuses to fetch.
     */
    orderBy?: task_statusOrderByWithRelationInput | task_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: task_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` task_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` task_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned task_statuses
     **/
    _count?: true | Task_statusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Task_statusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Task_statusMaxAggregateInputType;
  };

  export type GetTask_statusAggregateType<T extends Task_statusAggregateArgs> = {
    [P in keyof T & keyof AggregateTask_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask_status[P]>
      : GetScalarType<T[P], AggregateTask_status[P]>;
  };

  export type task_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_statusWhereInput;
    orderBy?: task_statusOrderByWithAggregationInput | task_statusOrderByWithAggregationInput[];
    by: Task_statusScalarFieldEnum[] | Task_statusScalarFieldEnum;
    having?: task_statusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Task_statusCountAggregateInputType | true;
    _min?: Task_statusMinAggregateInputType;
    _max?: Task_statusMaxAggregateInputType;
  };

  export type Task_statusGroupByOutputType = {
    id: string;
    status: string | null;
    project_task_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Task_statusCountAggregateOutputType | null;
    _min: Task_statusMinAggregateOutputType | null;
    _max: Task_statusMaxAggregateOutputType | null;
  };

  type GetTask_statusGroupByPayload<T extends task_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Task_statusGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Task_statusGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Task_statusGroupByOutputType[P]>
          : GetScalarType<T[P], Task_statusGroupByOutputType[P]>;
      }
    >
  >;

  export type task_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        status?: boolean;
        project_task_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        project_task?: boolean | project_taskDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['task_status']
    >;

  export type task_statusSelectScalar = {
    id?: boolean;
    status?: boolean;
    project_task_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type task_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_task?: boolean | project_taskDefaultArgs<ExtArgs>;
  };

  export type $task_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'task_status';
    objects: {
      project_task: Prisma.$project_taskPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        status: string | null;
        project_task_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['task_status']
    >;
    composites: {};
  };

  type task_statusGetPayload<S extends boolean | null | undefined | task_statusDefaultArgs> = $Result.GetResult<
    Prisma.$task_statusPayload,
    S
  >;

  type task_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    task_statusFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Task_statusCountAggregateInputType | true;
  };

  export interface task_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task_status']; meta: { name: 'task_status' } };
    /**
     * Find zero or one Task_status that matches the filter.
     * @param {task_statusFindUniqueArgs} args - Arguments to find a Task_status
     * @example
     * // Get one Task_status
     * const task_status = await prisma.task_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends task_statusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, task_statusFindUniqueArgs<ExtArgs>>,
    ): Prisma__task_statusClient<
      $Result.GetResult<Prisma.$task_statusPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Task_status that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {task_statusFindUniqueOrThrowArgs} args - Arguments to find a Task_status
     * @example
     * // Get one Task_status
     * const task_status = await prisma.task_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends task_statusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, task_statusFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__task_statusClient<
      $Result.GetResult<Prisma.$task_statusPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Task_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_statusFindFirstArgs} args - Arguments to find a Task_status
     * @example
     * // Get one Task_status
     * const task_status = await prisma.task_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends task_statusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, task_statusFindFirstArgs<ExtArgs>>,
    ): Prisma__task_statusClient<
      $Result.GetResult<Prisma.$task_statusPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Task_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_statusFindFirstOrThrowArgs} args - Arguments to find a Task_status
     * @example
     * // Get one Task_status
     * const task_status = await prisma.task_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends task_statusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, task_statusFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__task_statusClient<
      $Result.GetResult<Prisma.$task_statusPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Task_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_statusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Task_statuses
     * const task_statuses = await prisma.task_status.findMany()
     *
     * // Get first 10 Task_statuses
     * const task_statuses = await prisma.task_status.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const task_statusWithIdOnly = await prisma.task_status.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends task_statusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, task_statusFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_statusPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Task_status.
     * @param {task_statusCreateArgs} args - Arguments to create a Task_status.
     * @example
     * // Create one Task_status
     * const Task_status = await prisma.task_status.create({
     *   data: {
     *     // ... data to create a Task_status
     *   }
     * })
     *
     **/
    create<T extends task_statusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, task_statusCreateArgs<ExtArgs>>,
    ): Prisma__task_statusClient<$Result.GetResult<Prisma.$task_statusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Task_statuses.
     *     @param {task_statusCreateManyArgs} args - Arguments to create many Task_statuses.
     *     @example
     *     // Create many Task_statuses
     *     const task_status = await prisma.task_status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends task_statusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, task_statusCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Task_status.
     * @param {task_statusDeleteArgs} args - Arguments to delete one Task_status.
     * @example
     * // Delete one Task_status
     * const Task_status = await prisma.task_status.delete({
     *   where: {
     *     // ... filter to delete one Task_status
     *   }
     * })
     *
     **/
    delete<T extends task_statusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, task_statusDeleteArgs<ExtArgs>>,
    ): Prisma__task_statusClient<$Result.GetResult<Prisma.$task_statusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Task_status.
     * @param {task_statusUpdateArgs} args - Arguments to update one Task_status.
     * @example
     * // Update one Task_status
     * const task_status = await prisma.task_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends task_statusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, task_statusUpdateArgs<ExtArgs>>,
    ): Prisma__task_statusClient<$Result.GetResult<Prisma.$task_statusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Task_statuses.
     * @param {task_statusDeleteManyArgs} args - Arguments to filter Task_statuses to delete.
     * @example
     * // Delete a few Task_statuses
     * const { count } = await prisma.task_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends task_statusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, task_statusDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Task_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Task_statuses
     * const task_status = await prisma.task_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends task_statusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, task_statusUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Task_status.
     * @param {task_statusUpsertArgs} args - Arguments to update or create a Task_status.
     * @example
     * // Update or create a Task_status
     * const task_status = await prisma.task_status.upsert({
     *   create: {
     *     // ... data to create a Task_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task_status we want to update
     *   }
     * })
     **/
    upsert<T extends task_statusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, task_statusUpsertArgs<ExtArgs>>,
    ): Prisma__task_statusClient<$Result.GetResult<Prisma.$task_statusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Task_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_statusCountArgs} args - Arguments to filter Task_statuses to count.
     * @example
     * // Count the number of Task_statuses
     * const count = await prisma.task_status.count({
     *   where: {
     *     // ... the filter for the Task_statuses we want to count
     *   }
     * })
     **/
    count<T extends task_statusCountArgs>(
      args?: Subset<T, task_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Task_statusCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Task_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Task_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Task_statusAggregateArgs>(
      args: Subset<T, Task_statusAggregateArgs>,
    ): Prisma.PrismaPromise<GetTask_statusAggregateType<T>>;

    /**
     * Group by Task_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends task_statusGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: task_statusGroupByArgs['orderBy'] }
        : { orderBy?: task_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, task_statusGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTask_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the task_status model
     */
    readonly fields: task_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__task_statusClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project_task<T extends project_taskDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, project_taskDefaultArgs<ExtArgs>>,
    ): Prisma__project_taskClient<
      $Result.GetResult<Prisma.$project_taskPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the task_status model
   */
  interface task_statusFieldRefs {
    readonly id: FieldRef<'task_status', 'String'>;
    readonly status: FieldRef<'task_status', 'String'>;
    readonly project_task_id: FieldRef<'task_status', 'String'>;
    readonly created_at: FieldRef<'task_status', 'DateTime'>;
    readonly updated_at: FieldRef<'task_status', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * task_status findUnique
   */
  export type task_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
    /**
     * Filter, which task_status to fetch.
     */
    where: task_statusWhereUniqueInput;
  };

  /**
   * task_status findUniqueOrThrow
   */
  export type task_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
    /**
     * Filter, which task_status to fetch.
     */
    where: task_statusWhereUniqueInput;
  };

  /**
   * task_status findFirst
   */
  export type task_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
    /**
     * Filter, which task_status to fetch.
     */
    where?: task_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of task_statuses to fetch.
     */
    orderBy?: task_statusOrderByWithRelationInput | task_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for task_statuses.
     */
    cursor?: task_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` task_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` task_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of task_statuses.
     */
    distinct?: Task_statusScalarFieldEnum | Task_statusScalarFieldEnum[];
  };

  /**
   * task_status findFirstOrThrow
   */
  export type task_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
    /**
     * Filter, which task_status to fetch.
     */
    where?: task_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of task_statuses to fetch.
     */
    orderBy?: task_statusOrderByWithRelationInput | task_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for task_statuses.
     */
    cursor?: task_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` task_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` task_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of task_statuses.
     */
    distinct?: Task_statusScalarFieldEnum | Task_statusScalarFieldEnum[];
  };

  /**
   * task_status findMany
   */
  export type task_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
    /**
     * Filter, which task_statuses to fetch.
     */
    where?: task_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of task_statuses to fetch.
     */
    orderBy?: task_statusOrderByWithRelationInput | task_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing task_statuses.
     */
    cursor?: task_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` task_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` task_statuses.
     */
    skip?: number;
    distinct?: Task_statusScalarFieldEnum | Task_statusScalarFieldEnum[];
  };

  /**
   * task_status create
   */
  export type task_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
    /**
     * The data needed to create a task_status.
     */
    data: XOR<task_statusCreateInput, task_statusUncheckedCreateInput>;
  };

  /**
   * task_status createMany
   */
  export type task_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many task_statuses.
     */
    data: task_statusCreateManyInput | task_statusCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * task_status update
   */
  export type task_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
    /**
     * The data needed to update a task_status.
     */
    data: XOR<task_statusUpdateInput, task_statusUncheckedUpdateInput>;
    /**
     * Choose, which task_status to update.
     */
    where: task_statusWhereUniqueInput;
  };

  /**
   * task_status updateMany
   */
  export type task_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update task_statuses.
     */
    data: XOR<task_statusUpdateManyMutationInput, task_statusUncheckedUpdateManyInput>;
    /**
     * Filter which task_statuses to update
     */
    where?: task_statusWhereInput;
  };

  /**
   * task_status upsert
   */
  export type task_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
    /**
     * The filter to search for the task_status to update in case it exists.
     */
    where: task_statusWhereUniqueInput;
    /**
     * In case the task_status found by the `where` argument doesn't exist, create a new task_status with this data.
     */
    create: XOR<task_statusCreateInput, task_statusUncheckedCreateInput>;
    /**
     * In case the task_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<task_statusUpdateInput, task_statusUncheckedUpdateInput>;
  };

  /**
   * task_status delete
   */
  export type task_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
    /**
     * Filter which task_status to delete.
     */
    where: task_statusWhereUniqueInput;
  };

  /**
   * task_status deleteMany
   */
  export type task_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_statuses to delete
     */
    where?: task_statusWhereInput;
  };

  /**
   * task_status without action
   */
  export type task_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status
     */
    select?: task_statusSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: task_statusInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    image: 'image';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const DeveloperScalarFieldEnum: {
    id: 'id';
    project_role: 'project_role';
    programming_language: 'programming_language';
    years_of_experience: 'years_of_experience';
    name: 'name';
    email: 'email';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DeveloperScalarFieldEnum = (typeof DeveloperScalarFieldEnum)[keyof typeof DeveloperScalarFieldEnum];

  export const Kanban_boardScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Kanban_boardScalarFieldEnum =
    (typeof Kanban_boardScalarFieldEnum)[keyof typeof Kanban_boardScalarFieldEnum];

  export const ProjectScalarFieldEnum: {
    id: 'id';
    description: 'description';
    service_case: 'service_case';
    company_id: 'company_id';
    required_date: 'required_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];

  export const Project_taskScalarFieldEnum: {
    id: 'id';
    description: 'description';
    required_date: 'required_date';
    project_id: 'project_id';
    status: 'status';
    document_file: 'document_file';
    started: 'started';
    developer_id: 'developer_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Project_taskScalarFieldEnum =
    (typeof Project_taskScalarFieldEnum)[keyof typeof Project_taskScalarFieldEnum];

  export const Task_statusScalarFieldEnum: {
    id: 'id';
    status: 'status';
    project_task_id: 'project_task_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Task_statusScalarFieldEnum = (typeof Task_statusScalarFieldEnum)[keyof typeof Task_statusScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    image?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
    project?: ProjectListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    project?: projectOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      image?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
      project?: ProjectListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    image?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type developerWhereInput = {
    AND?: developerWhereInput | developerWhereInput[];
    OR?: developerWhereInput[];
    NOT?: developerWhereInput | developerWhereInput[];
    id?: UuidFilter<'developer'> | string;
    project_role?: StringNullableFilter<'developer'> | string | null;
    programming_language?: StringNullableFilter<'developer'> | string | null;
    years_of_experience?: IntNullableFilter<'developer'> | number | null;
    name?: StringNullableFilter<'developer'> | string | null;
    email?: StringNullableFilter<'developer'> | string | null;
    created_at?: DateTimeFilter<'developer'> | Date | string;
    updated_at?: DateTimeFilter<'developer'> | Date | string;
    project_task?: Project_taskListRelationFilter;
  };

  export type developerOrderByWithRelationInput = {
    id?: SortOrder;
    project_role?: SortOrderInput | SortOrder;
    programming_language?: SortOrderInput | SortOrder;
    years_of_experience?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    project_task?: project_taskOrderByRelationAggregateInput;
  };

  export type developerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: developerWhereInput | developerWhereInput[];
      OR?: developerWhereInput[];
      NOT?: developerWhereInput | developerWhereInput[];
      project_role?: StringNullableFilter<'developer'> | string | null;
      programming_language?: StringNullableFilter<'developer'> | string | null;
      years_of_experience?: IntNullableFilter<'developer'> | number | null;
      name?: StringNullableFilter<'developer'> | string | null;
      email?: StringNullableFilter<'developer'> | string | null;
      created_at?: DateTimeFilter<'developer'> | Date | string;
      updated_at?: DateTimeFilter<'developer'> | Date | string;
      project_task?: Project_taskListRelationFilter;
    },
    'id'
  >;

  export type developerOrderByWithAggregationInput = {
    id?: SortOrder;
    project_role?: SortOrderInput | SortOrder;
    programming_language?: SortOrderInput | SortOrder;
    years_of_experience?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: developerCountOrderByAggregateInput;
    _avg?: developerAvgOrderByAggregateInput;
    _max?: developerMaxOrderByAggregateInput;
    _min?: developerMinOrderByAggregateInput;
    _sum?: developerSumOrderByAggregateInput;
  };

  export type developerScalarWhereWithAggregatesInput = {
    AND?: developerScalarWhereWithAggregatesInput | developerScalarWhereWithAggregatesInput[];
    OR?: developerScalarWhereWithAggregatesInput[];
    NOT?: developerScalarWhereWithAggregatesInput | developerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'developer'> | string;
    project_role?: StringNullableWithAggregatesFilter<'developer'> | string | null;
    programming_language?: StringNullableWithAggregatesFilter<'developer'> | string | null;
    years_of_experience?: IntNullableWithAggregatesFilter<'developer'> | number | null;
    name?: StringNullableWithAggregatesFilter<'developer'> | string | null;
    email?: StringNullableWithAggregatesFilter<'developer'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'developer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'developer'> | Date | string;
  };

  export type kanban_boardWhereInput = {
    AND?: kanban_boardWhereInput | kanban_boardWhereInput[];
    OR?: kanban_boardWhereInput[];
    NOT?: kanban_boardWhereInput | kanban_boardWhereInput[];
    id?: UuidFilter<'kanban_board'> | string;
    created_at?: DateTimeFilter<'kanban_board'> | Date | string;
    updated_at?: DateTimeFilter<'kanban_board'> | Date | string;
  };

  export type kanban_boardOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type kanban_boardWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: kanban_boardWhereInput | kanban_boardWhereInput[];
      OR?: kanban_boardWhereInput[];
      NOT?: kanban_boardWhereInput | kanban_boardWhereInput[];
      created_at?: DateTimeFilter<'kanban_board'> | Date | string;
      updated_at?: DateTimeFilter<'kanban_board'> | Date | string;
    },
    'id'
  >;

  export type kanban_boardOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: kanban_boardCountOrderByAggregateInput;
    _max?: kanban_boardMaxOrderByAggregateInput;
    _min?: kanban_boardMinOrderByAggregateInput;
  };

  export type kanban_boardScalarWhereWithAggregatesInput = {
    AND?: kanban_boardScalarWhereWithAggregatesInput | kanban_boardScalarWhereWithAggregatesInput[];
    OR?: kanban_boardScalarWhereWithAggregatesInput[];
    NOT?: kanban_boardScalarWhereWithAggregatesInput | kanban_boardScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'kanban_board'> | string;
    created_at?: DateTimeWithAggregatesFilter<'kanban_board'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'kanban_board'> | Date | string;
  };

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[];
    OR?: projectWhereInput[];
    NOT?: projectWhereInput | projectWhereInput[];
    id?: UuidFilter<'project'> | string;
    description?: StringFilter<'project'> | string;
    service_case?: IntFilter<'project'> | number;
    company_id?: UuidFilter<'project'> | string;
    required_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    created_at?: DateTimeFilter<'project'> | Date | string;
    updated_at?: DateTimeFilter<'project'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    project_task?: Project_taskListRelationFilter;
  };

  export type projectOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrder;
    service_case?: SortOrder;
    company_id?: SortOrder;
    required_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    project_task?: project_taskOrderByRelationAggregateInput;
  };

  export type projectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      service_case?: number;
      AND?: projectWhereInput | projectWhereInput[];
      OR?: projectWhereInput[];
      NOT?: projectWhereInput | projectWhereInput[];
      description?: StringFilter<'project'> | string;
      company_id?: UuidFilter<'project'> | string;
      required_date?: DateTimeNullableFilter<'project'> | Date | string | null;
      created_at?: DateTimeFilter<'project'> | Date | string;
      updated_at?: DateTimeFilter<'project'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      project_task?: Project_taskListRelationFilter;
    },
    'id' | 'service_case'
  >;

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrder;
    service_case?: SortOrder;
    company_id?: SortOrder;
    required_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: projectCountOrderByAggregateInput;
    _avg?: projectAvgOrderByAggregateInput;
    _max?: projectMaxOrderByAggregateInput;
    _min?: projectMinOrderByAggregateInput;
    _sum?: projectSumOrderByAggregateInput;
  };

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[];
    OR?: projectScalarWhereWithAggregatesInput[];
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'project'> | string;
    description?: StringWithAggregatesFilter<'project'> | string;
    service_case?: IntWithAggregatesFilter<'project'> | number;
    company_id?: UuidWithAggregatesFilter<'project'> | string;
    required_date?: DateTimeNullableWithAggregatesFilter<'project'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'project'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'project'> | Date | string;
  };

  export type project_taskWhereInput = {
    AND?: project_taskWhereInput | project_taskWhereInput[];
    OR?: project_taskWhereInput[];
    NOT?: project_taskWhereInput | project_taskWhereInput[];
    id?: UuidFilter<'project_task'> | string;
    description?: StringFilter<'project_task'> | string;
    required_date?: DateTimeNullableFilter<'project_task'> | Date | string | null;
    project_id?: UuidFilter<'project_task'> | string;
    status?: StringFilter<'project_task'> | string;
    document_file?: StringNullableFilter<'project_task'> | string | null;
    started?: DateTimeFilter<'project_task'> | Date | string;
    developer_id?: UuidFilter<'project_task'> | string;
    created_at?: DateTimeFilter<'project_task'> | Date | string;
    updated_at?: DateTimeFilter<'project_task'> | Date | string;
    developer?: XOR<DeveloperRelationFilter, developerWhereInput>;
    project?: XOR<ProjectRelationFilter, projectWhereInput>;
    task_status?: Task_statusListRelationFilter;
  };

  export type project_taskOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrder;
    required_date?: SortOrderInput | SortOrder;
    project_id?: SortOrder;
    status?: SortOrder;
    document_file?: SortOrderInput | SortOrder;
    started?: SortOrder;
    developer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    developer?: developerOrderByWithRelationInput;
    project?: projectOrderByWithRelationInput;
    task_status?: task_statusOrderByRelationAggregateInput;
  };

  export type project_taskWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: project_taskWhereInput | project_taskWhereInput[];
      OR?: project_taskWhereInput[];
      NOT?: project_taskWhereInput | project_taskWhereInput[];
      description?: StringFilter<'project_task'> | string;
      required_date?: DateTimeNullableFilter<'project_task'> | Date | string | null;
      project_id?: UuidFilter<'project_task'> | string;
      status?: StringFilter<'project_task'> | string;
      document_file?: StringNullableFilter<'project_task'> | string | null;
      started?: DateTimeFilter<'project_task'> | Date | string;
      developer_id?: UuidFilter<'project_task'> | string;
      created_at?: DateTimeFilter<'project_task'> | Date | string;
      updated_at?: DateTimeFilter<'project_task'> | Date | string;
      developer?: XOR<DeveloperRelationFilter, developerWhereInput>;
      project?: XOR<ProjectRelationFilter, projectWhereInput>;
      task_status?: Task_statusListRelationFilter;
    },
    'id'
  >;

  export type project_taskOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrder;
    required_date?: SortOrderInput | SortOrder;
    project_id?: SortOrder;
    status?: SortOrder;
    document_file?: SortOrderInput | SortOrder;
    started?: SortOrder;
    developer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: project_taskCountOrderByAggregateInput;
    _max?: project_taskMaxOrderByAggregateInput;
    _min?: project_taskMinOrderByAggregateInput;
  };

  export type project_taskScalarWhereWithAggregatesInput = {
    AND?: project_taskScalarWhereWithAggregatesInput | project_taskScalarWhereWithAggregatesInput[];
    OR?: project_taskScalarWhereWithAggregatesInput[];
    NOT?: project_taskScalarWhereWithAggregatesInput | project_taskScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'project_task'> | string;
    description?: StringWithAggregatesFilter<'project_task'> | string;
    required_date?: DateTimeNullableWithAggregatesFilter<'project_task'> | Date | string | null;
    project_id?: UuidWithAggregatesFilter<'project_task'> | string;
    status?: StringWithAggregatesFilter<'project_task'> | string;
    document_file?: StringNullableWithAggregatesFilter<'project_task'> | string | null;
    started?: DateTimeWithAggregatesFilter<'project_task'> | Date | string;
    developer_id?: UuidWithAggregatesFilter<'project_task'> | string;
    created_at?: DateTimeWithAggregatesFilter<'project_task'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'project_task'> | Date | string;
  };

  export type task_statusWhereInput = {
    AND?: task_statusWhereInput | task_statusWhereInput[];
    OR?: task_statusWhereInput[];
    NOT?: task_statusWhereInput | task_statusWhereInput[];
    id?: UuidFilter<'task_status'> | string;
    status?: StringNullableFilter<'task_status'> | string | null;
    project_task_id?: UuidFilter<'task_status'> | string;
    created_at?: DateTimeFilter<'task_status'> | Date | string;
    updated_at?: DateTimeFilter<'task_status'> | Date | string;
    project_task?: XOR<Project_taskRelationFilter, project_taskWhereInput>;
  };

  export type task_statusOrderByWithRelationInput = {
    id?: SortOrder;
    status?: SortOrderInput | SortOrder;
    project_task_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    project_task?: project_taskOrderByWithRelationInput;
  };

  export type task_statusWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: task_statusWhereInput | task_statusWhereInput[];
      OR?: task_statusWhereInput[];
      NOT?: task_statusWhereInput | task_statusWhereInput[];
      status?: StringNullableFilter<'task_status'> | string | null;
      project_task_id?: UuidFilter<'task_status'> | string;
      created_at?: DateTimeFilter<'task_status'> | Date | string;
      updated_at?: DateTimeFilter<'task_status'> | Date | string;
      project_task?: XOR<Project_taskRelationFilter, project_taskWhereInput>;
    },
    'id'
  >;

  export type task_statusOrderByWithAggregationInput = {
    id?: SortOrder;
    status?: SortOrderInput | SortOrder;
    project_task_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: task_statusCountOrderByAggregateInput;
    _max?: task_statusMaxOrderByAggregateInput;
    _min?: task_statusMinOrderByAggregateInput;
  };

  export type task_statusScalarWhereWithAggregatesInput = {
    AND?: task_statusScalarWhereWithAggregatesInput | task_statusScalarWhereWithAggregatesInput[];
    OR?: task_statusScalarWhereWithAggregatesInput[];
    NOT?: task_statusScalarWhereWithAggregatesInput | task_statusScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'task_status'> | string;
    status?: StringNullableWithAggregatesFilter<'task_status'> | string | null;
    project_task_id?: UuidWithAggregatesFilter<'task_status'> | string;
    created_at?: DateTimeWithAggregatesFilter<'task_status'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'task_status'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    project?: projectCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    project?: projectUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    project?: projectUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    project?: projectUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type developerCreateInput = {
    id?: string;
    project_role?: string | null;
    programming_language?: string | null;
    years_of_experience?: number | null;
    name?: string | null;
    email?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project_task?: project_taskCreateNestedManyWithoutDeveloperInput;
  };

  export type developerUncheckedCreateInput = {
    id?: string;
    project_role?: string | null;
    programming_language?: string | null;
    years_of_experience?: number | null;
    name?: string | null;
    email?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project_task?: project_taskUncheckedCreateNestedManyWithoutDeveloperInput;
  };

  export type developerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    project_role?: NullableStringFieldUpdateOperationsInput | string | null;
    programming_language?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project_task?: project_taskUpdateManyWithoutDeveloperNestedInput;
  };

  export type developerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    project_role?: NullableStringFieldUpdateOperationsInput | string | null;
    programming_language?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project_task?: project_taskUncheckedUpdateManyWithoutDeveloperNestedInput;
  };

  export type developerCreateManyInput = {
    id?: string;
    project_role?: string | null;
    programming_language?: string | null;
    years_of_experience?: number | null;
    name?: string | null;
    email?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type developerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    project_role?: NullableStringFieldUpdateOperationsInput | string | null;
    programming_language?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type developerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    project_role?: NullableStringFieldUpdateOperationsInput | string | null;
    programming_language?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type kanban_boardCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type kanban_boardUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type kanban_boardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type kanban_boardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type kanban_boardCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type kanban_boardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type kanban_boardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectCreateInput = {
    id?: string;
    description: string;
    service_case: number;
    required_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutProjectInput;
    project_task?: project_taskCreateNestedManyWithoutProjectInput;
  };

  export type projectUncheckedCreateInput = {
    id?: string;
    description: string;
    service_case: number;
    company_id: string;
    required_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project_task?: project_taskUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    service_case?: IntFieldUpdateOperationsInput | number;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutProjectNestedInput;
    project_task?: project_taskUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    service_case?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project_task?: project_taskUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type projectCreateManyInput = {
    id?: string;
    description: string;
    service_case: number;
    company_id: string;
    required_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    service_case?: IntFieldUpdateOperationsInput | number;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    service_case?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type project_taskCreateInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    developer: developerCreateNestedOneWithoutProject_taskInput;
    project: projectCreateNestedOneWithoutProject_taskInput;
    task_status?: task_statusCreateNestedManyWithoutProject_taskInput;
  };

  export type project_taskUncheckedCreateInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    project_id: string;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    developer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    task_status?: task_statusUncheckedCreateNestedManyWithoutProject_taskInput;
  };

  export type project_taskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    developer?: developerUpdateOneRequiredWithoutProject_taskNestedInput;
    project?: projectUpdateOneRequiredWithoutProject_taskNestedInput;
    task_status?: task_statusUpdateManyWithoutProject_taskNestedInput;
  };

  export type project_taskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    developer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task_status?: task_statusUncheckedUpdateManyWithoutProject_taskNestedInput;
  };

  export type project_taskCreateManyInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    project_id: string;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    developer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type project_taskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type project_taskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    developer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type task_statusCreateInput = {
    id?: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project_task: project_taskCreateNestedOneWithoutTask_statusInput;
  };

  export type task_statusUncheckedCreateInput = {
    id?: string;
    status?: string | null;
    project_task_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type task_statusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project_task?: project_taskUpdateOneRequiredWithoutTask_statusNestedInput;
  };

  export type task_statusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    project_task_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type task_statusCreateManyInput = {
    id?: string;
    status?: string | null;
    project_task_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type task_statusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type task_statusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    project_task_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ProjectListRelationFilter = {
    every?: projectWhereInput;
    some?: projectWhereInput;
    none?: projectWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type Project_taskListRelationFilter = {
    every?: project_taskWhereInput;
    some?: project_taskWhereInput;
    none?: project_taskWhereInput;
  };

  export type project_taskOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type developerCountOrderByAggregateInput = {
    id?: SortOrder;
    project_role?: SortOrder;
    programming_language?: SortOrder;
    years_of_experience?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type developerAvgOrderByAggregateInput = {
    years_of_experience?: SortOrder;
  };

  export type developerMaxOrderByAggregateInput = {
    id?: SortOrder;
    project_role?: SortOrder;
    programming_language?: SortOrder;
    years_of_experience?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type developerMinOrderByAggregateInput = {
    id?: SortOrder;
    project_role?: SortOrder;
    programming_language?: SortOrder;
    years_of_experience?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type developerSumOrderByAggregateInput = {
    years_of_experience?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type kanban_boardCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type kanban_boardMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type kanban_boardMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    service_case?: SortOrder;
    company_id?: SortOrder;
    required_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectAvgOrderByAggregateInput = {
    service_case?: SortOrder;
  };

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    service_case?: SortOrder;
    company_id?: SortOrder;
    required_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    service_case?: SortOrder;
    company_id?: SortOrder;
    required_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectSumOrderByAggregateInput = {
    service_case?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DeveloperRelationFilter = {
    is?: developerWhereInput;
    isNot?: developerWhereInput;
  };

  export type ProjectRelationFilter = {
    is?: projectWhereInput;
    isNot?: projectWhereInput;
  };

  export type Task_statusListRelationFilter = {
    every?: task_statusWhereInput;
    some?: task_statusWhereInput;
    none?: task_statusWhereInput;
  };

  export type task_statusOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type project_taskCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    required_date?: SortOrder;
    project_id?: SortOrder;
    status?: SortOrder;
    document_file?: SortOrder;
    started?: SortOrder;
    developer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type project_taskMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    required_date?: SortOrder;
    project_id?: SortOrder;
    status?: SortOrder;
    document_file?: SortOrder;
    started?: SortOrder;
    developer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type project_taskMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    required_date?: SortOrder;
    project_id?: SortOrder;
    status?: SortOrder;
    document_file?: SortOrder;
    started?: SortOrder;
    developer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Project_taskRelationFilter = {
    is?: project_taskWhereInput;
    isNot?: project_taskWhereInput;
  };

  export type task_statusCountOrderByAggregateInput = {
    id?: SortOrder;
    status?: SortOrder;
    project_task_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type task_statusMaxOrderByAggregateInput = {
    id?: SortOrder;
    status?: SortOrder;
    project_task_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type task_statusMinOrderByAggregateInput = {
    id?: SortOrder;
    status?: SortOrder;
    project_task_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>
      | projectCreateWithoutCompanyInput[]
      | projectUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: projectCreateOrConnectWithoutCompanyInput | projectCreateOrConnectWithoutCompanyInput[];
    createMany?: projectCreateManyCompanyInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type projectUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>
      | projectCreateWithoutCompanyInput[]
      | projectUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: projectCreateOrConnectWithoutCompanyInput | projectCreateOrConnectWithoutCompanyInput[];
    createMany?: projectCreateManyCompanyInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type projectUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>
      | projectCreateWithoutCompanyInput[]
      | projectUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: projectCreateOrConnectWithoutCompanyInput | projectCreateOrConnectWithoutCompanyInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutCompanyInput | projectUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: projectCreateManyCompanyInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutCompanyInput | projectUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: projectUpdateManyWithWhereWithoutCompanyInput | projectUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type projectUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>
      | projectCreateWithoutCompanyInput[]
      | projectUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: projectCreateOrConnectWithoutCompanyInput | projectCreateOrConnectWithoutCompanyInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutCompanyInput | projectUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: projectCreateManyCompanyInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutCompanyInput | projectUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: projectUpdateManyWithWhereWithoutCompanyInput | projectUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type project_taskCreateNestedManyWithoutDeveloperInput = {
    create?:
      | XOR<project_taskCreateWithoutDeveloperInput, project_taskUncheckedCreateWithoutDeveloperInput>
      | project_taskCreateWithoutDeveloperInput[]
      | project_taskUncheckedCreateWithoutDeveloperInput[];
    connectOrCreate?:
      | project_taskCreateOrConnectWithoutDeveloperInput
      | project_taskCreateOrConnectWithoutDeveloperInput[];
    createMany?: project_taskCreateManyDeveloperInputEnvelope;
    connect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
  };

  export type project_taskUncheckedCreateNestedManyWithoutDeveloperInput = {
    create?:
      | XOR<project_taskCreateWithoutDeveloperInput, project_taskUncheckedCreateWithoutDeveloperInput>
      | project_taskCreateWithoutDeveloperInput[]
      | project_taskUncheckedCreateWithoutDeveloperInput[];
    connectOrCreate?:
      | project_taskCreateOrConnectWithoutDeveloperInput
      | project_taskCreateOrConnectWithoutDeveloperInput[];
    createMany?: project_taskCreateManyDeveloperInputEnvelope;
    connect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type project_taskUpdateManyWithoutDeveloperNestedInput = {
    create?:
      | XOR<project_taskCreateWithoutDeveloperInput, project_taskUncheckedCreateWithoutDeveloperInput>
      | project_taskCreateWithoutDeveloperInput[]
      | project_taskUncheckedCreateWithoutDeveloperInput[];
    connectOrCreate?:
      | project_taskCreateOrConnectWithoutDeveloperInput
      | project_taskCreateOrConnectWithoutDeveloperInput[];
    upsert?:
      | project_taskUpsertWithWhereUniqueWithoutDeveloperInput
      | project_taskUpsertWithWhereUniqueWithoutDeveloperInput[];
    createMany?: project_taskCreateManyDeveloperInputEnvelope;
    set?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    disconnect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    delete?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    connect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    update?:
      | project_taskUpdateWithWhereUniqueWithoutDeveloperInput
      | project_taskUpdateWithWhereUniqueWithoutDeveloperInput[];
    updateMany?:
      | project_taskUpdateManyWithWhereWithoutDeveloperInput
      | project_taskUpdateManyWithWhereWithoutDeveloperInput[];
    deleteMany?: project_taskScalarWhereInput | project_taskScalarWhereInput[];
  };

  export type project_taskUncheckedUpdateManyWithoutDeveloperNestedInput = {
    create?:
      | XOR<project_taskCreateWithoutDeveloperInput, project_taskUncheckedCreateWithoutDeveloperInput>
      | project_taskCreateWithoutDeveloperInput[]
      | project_taskUncheckedCreateWithoutDeveloperInput[];
    connectOrCreate?:
      | project_taskCreateOrConnectWithoutDeveloperInput
      | project_taskCreateOrConnectWithoutDeveloperInput[];
    upsert?:
      | project_taskUpsertWithWhereUniqueWithoutDeveloperInput
      | project_taskUpsertWithWhereUniqueWithoutDeveloperInput[];
    createMany?: project_taskCreateManyDeveloperInputEnvelope;
    set?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    disconnect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    delete?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    connect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    update?:
      | project_taskUpdateWithWhereUniqueWithoutDeveloperInput
      | project_taskUpdateWithWhereUniqueWithoutDeveloperInput[];
    updateMany?:
      | project_taskUpdateManyWithWhereWithoutDeveloperInput
      | project_taskUpdateManyWithWhereWithoutDeveloperInput[];
    deleteMany?: project_taskScalarWhereInput | project_taskScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutProjectInput = {
    create?: XOR<companyCreateWithoutProjectInput, companyUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: companyCreateOrConnectWithoutProjectInput;
    connect?: companyWhereUniqueInput;
  };

  export type project_taskCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<project_taskCreateWithoutProjectInput, project_taskUncheckedCreateWithoutProjectInput>
      | project_taskCreateWithoutProjectInput[]
      | project_taskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: project_taskCreateOrConnectWithoutProjectInput | project_taskCreateOrConnectWithoutProjectInput[];
    createMany?: project_taskCreateManyProjectInputEnvelope;
    connect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
  };

  export type project_taskUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<project_taskCreateWithoutProjectInput, project_taskUncheckedCreateWithoutProjectInput>
      | project_taskCreateWithoutProjectInput[]
      | project_taskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: project_taskCreateOrConnectWithoutProjectInput | project_taskCreateOrConnectWithoutProjectInput[];
    createMany?: project_taskCreateManyProjectInputEnvelope;
    connect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type companyUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<companyCreateWithoutProjectInput, companyUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: companyCreateOrConnectWithoutProjectInput;
    upsert?: companyUpsertWithoutProjectInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutProjectInput, companyUpdateWithoutProjectInput>,
      companyUncheckedUpdateWithoutProjectInput
    >;
  };

  export type project_taskUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<project_taskCreateWithoutProjectInput, project_taskUncheckedCreateWithoutProjectInput>
      | project_taskCreateWithoutProjectInput[]
      | project_taskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: project_taskCreateOrConnectWithoutProjectInput | project_taskCreateOrConnectWithoutProjectInput[];
    upsert?:
      | project_taskUpsertWithWhereUniqueWithoutProjectInput
      | project_taskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: project_taskCreateManyProjectInputEnvelope;
    set?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    disconnect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    delete?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    connect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    update?:
      | project_taskUpdateWithWhereUniqueWithoutProjectInput
      | project_taskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | project_taskUpdateManyWithWhereWithoutProjectInput
      | project_taskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: project_taskScalarWhereInput | project_taskScalarWhereInput[];
  };

  export type project_taskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<project_taskCreateWithoutProjectInput, project_taskUncheckedCreateWithoutProjectInput>
      | project_taskCreateWithoutProjectInput[]
      | project_taskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: project_taskCreateOrConnectWithoutProjectInput | project_taskCreateOrConnectWithoutProjectInput[];
    upsert?:
      | project_taskUpsertWithWhereUniqueWithoutProjectInput
      | project_taskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: project_taskCreateManyProjectInputEnvelope;
    set?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    disconnect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    delete?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    connect?: project_taskWhereUniqueInput | project_taskWhereUniqueInput[];
    update?:
      | project_taskUpdateWithWhereUniqueWithoutProjectInput
      | project_taskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | project_taskUpdateManyWithWhereWithoutProjectInput
      | project_taskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: project_taskScalarWhereInput | project_taskScalarWhereInput[];
  };

  export type developerCreateNestedOneWithoutProject_taskInput = {
    create?: XOR<developerCreateWithoutProject_taskInput, developerUncheckedCreateWithoutProject_taskInput>;
    connectOrCreate?: developerCreateOrConnectWithoutProject_taskInput;
    connect?: developerWhereUniqueInput;
  };

  export type projectCreateNestedOneWithoutProject_taskInput = {
    create?: XOR<projectCreateWithoutProject_taskInput, projectUncheckedCreateWithoutProject_taskInput>;
    connectOrCreate?: projectCreateOrConnectWithoutProject_taskInput;
    connect?: projectWhereUniqueInput;
  };

  export type task_statusCreateNestedManyWithoutProject_taskInput = {
    create?:
      | XOR<task_statusCreateWithoutProject_taskInput, task_statusUncheckedCreateWithoutProject_taskInput>
      | task_statusCreateWithoutProject_taskInput[]
      | task_statusUncheckedCreateWithoutProject_taskInput[];
    connectOrCreate?:
      | task_statusCreateOrConnectWithoutProject_taskInput
      | task_statusCreateOrConnectWithoutProject_taskInput[];
    createMany?: task_statusCreateManyProject_taskInputEnvelope;
    connect?: task_statusWhereUniqueInput | task_statusWhereUniqueInput[];
  };

  export type task_statusUncheckedCreateNestedManyWithoutProject_taskInput = {
    create?:
      | XOR<task_statusCreateWithoutProject_taskInput, task_statusUncheckedCreateWithoutProject_taskInput>
      | task_statusCreateWithoutProject_taskInput[]
      | task_statusUncheckedCreateWithoutProject_taskInput[];
    connectOrCreate?:
      | task_statusCreateOrConnectWithoutProject_taskInput
      | task_statusCreateOrConnectWithoutProject_taskInput[];
    createMany?: task_statusCreateManyProject_taskInputEnvelope;
    connect?: task_statusWhereUniqueInput | task_statusWhereUniqueInput[];
  };

  export type developerUpdateOneRequiredWithoutProject_taskNestedInput = {
    create?: XOR<developerCreateWithoutProject_taskInput, developerUncheckedCreateWithoutProject_taskInput>;
    connectOrCreate?: developerCreateOrConnectWithoutProject_taskInput;
    upsert?: developerUpsertWithoutProject_taskInput;
    connect?: developerWhereUniqueInput;
    update?: XOR<
      XOR<developerUpdateToOneWithWhereWithoutProject_taskInput, developerUpdateWithoutProject_taskInput>,
      developerUncheckedUpdateWithoutProject_taskInput
    >;
  };

  export type projectUpdateOneRequiredWithoutProject_taskNestedInput = {
    create?: XOR<projectCreateWithoutProject_taskInput, projectUncheckedCreateWithoutProject_taskInput>;
    connectOrCreate?: projectCreateOrConnectWithoutProject_taskInput;
    upsert?: projectUpsertWithoutProject_taskInput;
    connect?: projectWhereUniqueInput;
    update?: XOR<
      XOR<projectUpdateToOneWithWhereWithoutProject_taskInput, projectUpdateWithoutProject_taskInput>,
      projectUncheckedUpdateWithoutProject_taskInput
    >;
  };

  export type task_statusUpdateManyWithoutProject_taskNestedInput = {
    create?:
      | XOR<task_statusCreateWithoutProject_taskInput, task_statusUncheckedCreateWithoutProject_taskInput>
      | task_statusCreateWithoutProject_taskInput[]
      | task_statusUncheckedCreateWithoutProject_taskInput[];
    connectOrCreate?:
      | task_statusCreateOrConnectWithoutProject_taskInput
      | task_statusCreateOrConnectWithoutProject_taskInput[];
    upsert?:
      | task_statusUpsertWithWhereUniqueWithoutProject_taskInput
      | task_statusUpsertWithWhereUniqueWithoutProject_taskInput[];
    createMany?: task_statusCreateManyProject_taskInputEnvelope;
    set?: task_statusWhereUniqueInput | task_statusWhereUniqueInput[];
    disconnect?: task_statusWhereUniqueInput | task_statusWhereUniqueInput[];
    delete?: task_statusWhereUniqueInput | task_statusWhereUniqueInput[];
    connect?: task_statusWhereUniqueInput | task_statusWhereUniqueInput[];
    update?:
      | task_statusUpdateWithWhereUniqueWithoutProject_taskInput
      | task_statusUpdateWithWhereUniqueWithoutProject_taskInput[];
    updateMany?:
      | task_statusUpdateManyWithWhereWithoutProject_taskInput
      | task_statusUpdateManyWithWhereWithoutProject_taskInput[];
    deleteMany?: task_statusScalarWhereInput | task_statusScalarWhereInput[];
  };

  export type task_statusUncheckedUpdateManyWithoutProject_taskNestedInput = {
    create?:
      | XOR<task_statusCreateWithoutProject_taskInput, task_statusUncheckedCreateWithoutProject_taskInput>
      | task_statusCreateWithoutProject_taskInput[]
      | task_statusUncheckedCreateWithoutProject_taskInput[];
    connectOrCreate?:
      | task_statusCreateOrConnectWithoutProject_taskInput
      | task_statusCreateOrConnectWithoutProject_taskInput[];
    upsert?:
      | task_statusUpsertWithWhereUniqueWithoutProject_taskInput
      | task_statusUpsertWithWhereUniqueWithoutProject_taskInput[];
    createMany?: task_statusCreateManyProject_taskInputEnvelope;
    set?: task_statusWhereUniqueInput | task_statusWhereUniqueInput[];
    disconnect?: task_statusWhereUniqueInput | task_statusWhereUniqueInput[];
    delete?: task_statusWhereUniqueInput | task_statusWhereUniqueInput[];
    connect?: task_statusWhereUniqueInput | task_statusWhereUniqueInput[];
    update?:
      | task_statusUpdateWithWhereUniqueWithoutProject_taskInput
      | task_statusUpdateWithWhereUniqueWithoutProject_taskInput[];
    updateMany?:
      | task_statusUpdateManyWithWhereWithoutProject_taskInput
      | task_statusUpdateManyWithWhereWithoutProject_taskInput[];
    deleteMany?: task_statusScalarWhereInput | task_statusScalarWhereInput[];
  };

  export type project_taskCreateNestedOneWithoutTask_statusInput = {
    create?: XOR<project_taskCreateWithoutTask_statusInput, project_taskUncheckedCreateWithoutTask_statusInput>;
    connectOrCreate?: project_taskCreateOrConnectWithoutTask_statusInput;
    connect?: project_taskWhereUniqueInput;
  };

  export type project_taskUpdateOneRequiredWithoutTask_statusNestedInput = {
    create?: XOR<project_taskCreateWithoutTask_statusInput, project_taskUncheckedCreateWithoutTask_statusInput>;
    connectOrCreate?: project_taskCreateOrConnectWithoutTask_statusInput;
    upsert?: project_taskUpsertWithoutTask_statusInput;
    connect?: project_taskWhereUniqueInput;
    update?: XOR<
      XOR<project_taskUpdateToOneWithWhereWithoutTask_statusInput, project_taskUpdateWithoutTask_statusInput>,
      project_taskUncheckedUpdateWithoutTask_statusInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type projectCreateWithoutCompanyInput = {
    id?: string;
    description: string;
    service_case: number;
    required_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project_task?: project_taskCreateNestedManyWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutCompanyInput = {
    id?: string;
    description: string;
    service_case: number;
    required_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project_task?: project_taskUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectCreateOrConnectWithoutCompanyInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>;
  };

  export type projectCreateManyCompanyInputEnvelope = {
    data: projectCreateManyCompanyInput | projectCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type projectUpsertWithWhereUniqueWithoutCompanyInput = {
    where: projectWhereUniqueInput;
    update: XOR<projectUpdateWithoutCompanyInput, projectUncheckedUpdateWithoutCompanyInput>;
    create: XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>;
  };

  export type projectUpdateWithWhereUniqueWithoutCompanyInput = {
    where: projectWhereUniqueInput;
    data: XOR<projectUpdateWithoutCompanyInput, projectUncheckedUpdateWithoutCompanyInput>;
  };

  export type projectUpdateManyWithWhereWithoutCompanyInput = {
    where: projectScalarWhereInput;
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[];
    OR?: projectScalarWhereInput[];
    NOT?: projectScalarWhereInput | projectScalarWhereInput[];
    id?: UuidFilter<'project'> | string;
    description?: StringFilter<'project'> | string;
    service_case?: IntFilter<'project'> | number;
    company_id?: UuidFilter<'project'> | string;
    required_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    created_at?: DateTimeFilter<'project'> | Date | string;
    updated_at?: DateTimeFilter<'project'> | Date | string;
  };

  export type project_taskCreateWithoutDeveloperInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    project: projectCreateNestedOneWithoutProject_taskInput;
    task_status?: task_statusCreateNestedManyWithoutProject_taskInput;
  };

  export type project_taskUncheckedCreateWithoutDeveloperInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    project_id: string;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    task_status?: task_statusUncheckedCreateNestedManyWithoutProject_taskInput;
  };

  export type project_taskCreateOrConnectWithoutDeveloperInput = {
    where: project_taskWhereUniqueInput;
    create: XOR<project_taskCreateWithoutDeveloperInput, project_taskUncheckedCreateWithoutDeveloperInput>;
  };

  export type project_taskCreateManyDeveloperInputEnvelope = {
    data: project_taskCreateManyDeveloperInput | project_taskCreateManyDeveloperInput[];
    skipDuplicates?: boolean;
  };

  export type project_taskUpsertWithWhereUniqueWithoutDeveloperInput = {
    where: project_taskWhereUniqueInput;
    update: XOR<project_taskUpdateWithoutDeveloperInput, project_taskUncheckedUpdateWithoutDeveloperInput>;
    create: XOR<project_taskCreateWithoutDeveloperInput, project_taskUncheckedCreateWithoutDeveloperInput>;
  };

  export type project_taskUpdateWithWhereUniqueWithoutDeveloperInput = {
    where: project_taskWhereUniqueInput;
    data: XOR<project_taskUpdateWithoutDeveloperInput, project_taskUncheckedUpdateWithoutDeveloperInput>;
  };

  export type project_taskUpdateManyWithWhereWithoutDeveloperInput = {
    where: project_taskScalarWhereInput;
    data: XOR<project_taskUpdateManyMutationInput, project_taskUncheckedUpdateManyWithoutDeveloperInput>;
  };

  export type project_taskScalarWhereInput = {
    AND?: project_taskScalarWhereInput | project_taskScalarWhereInput[];
    OR?: project_taskScalarWhereInput[];
    NOT?: project_taskScalarWhereInput | project_taskScalarWhereInput[];
    id?: UuidFilter<'project_task'> | string;
    description?: StringFilter<'project_task'> | string;
    required_date?: DateTimeNullableFilter<'project_task'> | Date | string | null;
    project_id?: UuidFilter<'project_task'> | string;
    status?: StringFilter<'project_task'> | string;
    document_file?: StringNullableFilter<'project_task'> | string | null;
    started?: DateTimeFilter<'project_task'> | Date | string;
    developer_id?: UuidFilter<'project_task'> | string;
    created_at?: DateTimeFilter<'project_task'> | Date | string;
    updated_at?: DateTimeFilter<'project_task'> | Date | string;
  };

  export type companyCreateWithoutProjectInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutProjectInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutProjectInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutProjectInput, companyUncheckedCreateWithoutProjectInput>;
  };

  export type project_taskCreateWithoutProjectInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    developer: developerCreateNestedOneWithoutProject_taskInput;
    task_status?: task_statusCreateNestedManyWithoutProject_taskInput;
  };

  export type project_taskUncheckedCreateWithoutProjectInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    developer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    task_status?: task_statusUncheckedCreateNestedManyWithoutProject_taskInput;
  };

  export type project_taskCreateOrConnectWithoutProjectInput = {
    where: project_taskWhereUniqueInput;
    create: XOR<project_taskCreateWithoutProjectInput, project_taskUncheckedCreateWithoutProjectInput>;
  };

  export type project_taskCreateManyProjectInputEnvelope = {
    data: project_taskCreateManyProjectInput | project_taskCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutProjectInput = {
    update: XOR<companyUpdateWithoutProjectInput, companyUncheckedUpdateWithoutProjectInput>;
    create: XOR<companyCreateWithoutProjectInput, companyUncheckedCreateWithoutProjectInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutProjectInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutProjectInput, companyUncheckedUpdateWithoutProjectInput>;
  };

  export type companyUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type project_taskUpsertWithWhereUniqueWithoutProjectInput = {
    where: project_taskWhereUniqueInput;
    update: XOR<project_taskUpdateWithoutProjectInput, project_taskUncheckedUpdateWithoutProjectInput>;
    create: XOR<project_taskCreateWithoutProjectInput, project_taskUncheckedCreateWithoutProjectInput>;
  };

  export type project_taskUpdateWithWhereUniqueWithoutProjectInput = {
    where: project_taskWhereUniqueInput;
    data: XOR<project_taskUpdateWithoutProjectInput, project_taskUncheckedUpdateWithoutProjectInput>;
  };

  export type project_taskUpdateManyWithWhereWithoutProjectInput = {
    where: project_taskScalarWhereInput;
    data: XOR<project_taskUpdateManyMutationInput, project_taskUncheckedUpdateManyWithoutProjectInput>;
  };

  export type developerCreateWithoutProject_taskInput = {
    id?: string;
    project_role?: string | null;
    programming_language?: string | null;
    years_of_experience?: number | null;
    name?: string | null;
    email?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type developerUncheckedCreateWithoutProject_taskInput = {
    id?: string;
    project_role?: string | null;
    programming_language?: string | null;
    years_of_experience?: number | null;
    name?: string | null;
    email?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type developerCreateOrConnectWithoutProject_taskInput = {
    where: developerWhereUniqueInput;
    create: XOR<developerCreateWithoutProject_taskInput, developerUncheckedCreateWithoutProject_taskInput>;
  };

  export type projectCreateWithoutProject_taskInput = {
    id?: string;
    description: string;
    service_case: number;
    required_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutProject_taskInput = {
    id?: string;
    description: string;
    service_case: number;
    company_id: string;
    required_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectCreateOrConnectWithoutProject_taskInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutProject_taskInput, projectUncheckedCreateWithoutProject_taskInput>;
  };

  export type task_statusCreateWithoutProject_taskInput = {
    id?: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type task_statusUncheckedCreateWithoutProject_taskInput = {
    id?: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type task_statusCreateOrConnectWithoutProject_taskInput = {
    where: task_statusWhereUniqueInput;
    create: XOR<task_statusCreateWithoutProject_taskInput, task_statusUncheckedCreateWithoutProject_taskInput>;
  };

  export type task_statusCreateManyProject_taskInputEnvelope = {
    data: task_statusCreateManyProject_taskInput | task_statusCreateManyProject_taskInput[];
    skipDuplicates?: boolean;
  };

  export type developerUpsertWithoutProject_taskInput = {
    update: XOR<developerUpdateWithoutProject_taskInput, developerUncheckedUpdateWithoutProject_taskInput>;
    create: XOR<developerCreateWithoutProject_taskInput, developerUncheckedCreateWithoutProject_taskInput>;
    where?: developerWhereInput;
  };

  export type developerUpdateToOneWithWhereWithoutProject_taskInput = {
    where?: developerWhereInput;
    data: XOR<developerUpdateWithoutProject_taskInput, developerUncheckedUpdateWithoutProject_taskInput>;
  };

  export type developerUpdateWithoutProject_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    project_role?: NullableStringFieldUpdateOperationsInput | string | null;
    programming_language?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type developerUncheckedUpdateWithoutProject_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    project_role?: NullableStringFieldUpdateOperationsInput | string | null;
    programming_language?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectUpsertWithoutProject_taskInput = {
    update: XOR<projectUpdateWithoutProject_taskInput, projectUncheckedUpdateWithoutProject_taskInput>;
    create: XOR<projectCreateWithoutProject_taskInput, projectUncheckedCreateWithoutProject_taskInput>;
    where?: projectWhereInput;
  };

  export type projectUpdateToOneWithWhereWithoutProject_taskInput = {
    where?: projectWhereInput;
    data: XOR<projectUpdateWithoutProject_taskInput, projectUncheckedUpdateWithoutProject_taskInput>;
  };

  export type projectUpdateWithoutProject_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    service_case?: IntFieldUpdateOperationsInput | number;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutProject_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    service_case?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type task_statusUpsertWithWhereUniqueWithoutProject_taskInput = {
    where: task_statusWhereUniqueInput;
    update: XOR<task_statusUpdateWithoutProject_taskInput, task_statusUncheckedUpdateWithoutProject_taskInput>;
    create: XOR<task_statusCreateWithoutProject_taskInput, task_statusUncheckedCreateWithoutProject_taskInput>;
  };

  export type task_statusUpdateWithWhereUniqueWithoutProject_taskInput = {
    where: task_statusWhereUniqueInput;
    data: XOR<task_statusUpdateWithoutProject_taskInput, task_statusUncheckedUpdateWithoutProject_taskInput>;
  };

  export type task_statusUpdateManyWithWhereWithoutProject_taskInput = {
    where: task_statusScalarWhereInput;
    data: XOR<task_statusUpdateManyMutationInput, task_statusUncheckedUpdateManyWithoutProject_taskInput>;
  };

  export type task_statusScalarWhereInput = {
    AND?: task_statusScalarWhereInput | task_statusScalarWhereInput[];
    OR?: task_statusScalarWhereInput[];
    NOT?: task_statusScalarWhereInput | task_statusScalarWhereInput[];
    id?: UuidFilter<'task_status'> | string;
    status?: StringNullableFilter<'task_status'> | string | null;
    project_task_id?: UuidFilter<'task_status'> | string;
    created_at?: DateTimeFilter<'task_status'> | Date | string;
    updated_at?: DateTimeFilter<'task_status'> | Date | string;
  };

  export type project_taskCreateWithoutTask_statusInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    developer: developerCreateNestedOneWithoutProject_taskInput;
    project: projectCreateNestedOneWithoutProject_taskInput;
  };

  export type project_taskUncheckedCreateWithoutTask_statusInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    project_id: string;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    developer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type project_taskCreateOrConnectWithoutTask_statusInput = {
    where: project_taskWhereUniqueInput;
    create: XOR<project_taskCreateWithoutTask_statusInput, project_taskUncheckedCreateWithoutTask_statusInput>;
  };

  export type project_taskUpsertWithoutTask_statusInput = {
    update: XOR<project_taskUpdateWithoutTask_statusInput, project_taskUncheckedUpdateWithoutTask_statusInput>;
    create: XOR<project_taskCreateWithoutTask_statusInput, project_taskUncheckedCreateWithoutTask_statusInput>;
    where?: project_taskWhereInput;
  };

  export type project_taskUpdateToOneWithWhereWithoutTask_statusInput = {
    where?: project_taskWhereInput;
    data: XOR<project_taskUpdateWithoutTask_statusInput, project_taskUncheckedUpdateWithoutTask_statusInput>;
  };

  export type project_taskUpdateWithoutTask_statusInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    developer?: developerUpdateOneRequiredWithoutProject_taskNestedInput;
    project?: projectUpdateOneRequiredWithoutProject_taskNestedInput;
  };

  export type project_taskUncheckedUpdateWithoutTask_statusInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    developer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectCreateManyCompanyInput = {
    id?: string;
    description: string;
    service_case: number;
    required_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    service_case?: IntFieldUpdateOperationsInput | number;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project_task?: project_taskUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    service_case?: IntFieldUpdateOperationsInput | number;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project_task?: project_taskUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    service_case?: IntFieldUpdateOperationsInput | number;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type project_taskCreateManyDeveloperInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    project_id: string;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type project_taskUpdateWithoutDeveloperInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: projectUpdateOneRequiredWithoutProject_taskNestedInput;
    task_status?: task_statusUpdateManyWithoutProject_taskNestedInput;
  };

  export type project_taskUncheckedUpdateWithoutDeveloperInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task_status?: task_statusUncheckedUpdateManyWithoutProject_taskNestedInput;
  };

  export type project_taskUncheckedUpdateManyWithoutDeveloperInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type project_taskCreateManyProjectInput = {
    id?: string;
    description: string;
    required_date?: Date | string | null;
    status?: string;
    document_file?: string | null;
    started: Date | string;
    developer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type project_taskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    developer?: developerUpdateOneRequiredWithoutProject_taskNestedInput;
    task_status?: task_statusUpdateManyWithoutProject_taskNestedInput;
  };

  export type project_taskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    developer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task_status?: task_statusUncheckedUpdateManyWithoutProject_taskNestedInput;
  };

  export type project_taskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    required_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    document_file?: NullableStringFieldUpdateOperationsInput | string | null;
    started?: DateTimeFieldUpdateOperationsInput | Date | string;
    developer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type task_statusCreateManyProject_taskInput = {
    id?: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type task_statusUpdateWithoutProject_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type task_statusUncheckedUpdateWithoutProject_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type task_statusUncheckedUpdateManyWithoutProject_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use DeveloperCountOutputTypeDefaultArgs instead
   */
  export type DeveloperCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    DeveloperCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
   */
  export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ProjectCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Project_taskCountOutputTypeDefaultArgs instead
   */
  export type Project_taskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Project_taskCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use developerDefaultArgs instead
   */
  export type developerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    developerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use kanban_boardDefaultArgs instead
   */
  export type kanban_boardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    kanban_boardDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use projectDefaultArgs instead
   */
  export type projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    projectDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use project_taskDefaultArgs instead
   */
  export type project_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    project_taskDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use task_statusDefaultArgs instead
   */
  export type task_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    task_statusDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
