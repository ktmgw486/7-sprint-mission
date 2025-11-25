export class Product {
  #favoriteCount;
  constructor(name, description, price, tags = [], images = []) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.tags = tags;
    this.images = images;
    this.#favoriteCount = 0;
  }
  favorite() {
    this.#favoriteCount++;
  }
}
/**
 * Product 데이터 검증
 * @param {Object} productData - 검증할 Product 데이터
 * @throws {Error} 검증 실패 시 에러 발생
 */
function validateProduct(name, description, price, tags, images) {
  // 필수 필드 존재 여부 확인
  const missingFields = [];
  if (name === undefined) missingFields.push("name");
  if (description === undefined) missingFields.push("description");
  if (price === undefined || price === null) missingFields.push("price");
  if (!tags) missingFields.push("tags");
  if (!images) missingFields.push("images");

  if (missingFields.length > 0) {
    throw new Error(`필수 필드가 누락되었습니다: ${missingFields.join(", ")}`);
  }

  // 데이터 타입 검증
  if (typeof name !== "string") {
    throw new Error("name은 문자열이어야 합니다.");
  }
  if (typeof description !== "string") {
    throw new Error("description은 문자열이어야 합니다.");
  }
  if (typeof price !== "number" || price < 0) {
    throw new Error("price는 0 이상의 숫자여야 합니다.");
  }
  if (!Array.isArray(tags)) {
    throw new Error("tags는 배열이어야 합니다.");
  }
  if (!Array.isArray(images)) {
    throw new Error("images는 배열이어야 합니다.");
  }
}

export class ElectronicProduct extends Product {
  constructor(name, description, price, tags = [], images = [], manufactuer) {
    super(name, description, price, tags, images);
    this.manufactuer = manufactuer;
  }
  favorite() {
    super.favorite();
    console.log(`${this.manufactuer}의 ${this.name} 제품이 찜되었습니다.`);
  }
}
export class Article {
  #likeCount;
  #createdAt;
  constructor(title, content, writer, image) {
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.#likeCount = 0;
    this.#createdAt = new Date();
    this.image = image;
  }
  like() {
    this.#likeCount++;
  }
}

/**
 * Article 데이터 검증
 * @param {Object} articleData - 검증할 article 데이터
 * @throws {Error} 검증 실패 시 에러 발생
 */
function validateArticle(title, content, writer, image) {
  // 필수 필드 존재 여부 확인
  const missingFields = [];
  if (title === undefined) missingFields.push("title");
  if (content === undefined) missingFields.push("content");
  if (writer === undefined) missingFields.push("writer");
  if (image === undefined) missingFields.push("image");

  if (missingFields.length > 0) {
    throw new Error(`필수 필드가 누락되었습니다: ${missingFields.join(", ")}`);
  }

  // 데이터 타입 검증
  if (typeof title !== "string") {
    throw new Error("title은 문자열이어야 합니다.");
  }
  if (typeof content !== "string") {
    throw new Error("content는 문자열이어야 합니다.");
  }
  if (typeof writer !== "string") {
    throw new Error("writer는 문자열이어야 합니다.");
  }
  if (typeof image !== "string") {
    throw new Error("image는 문자열이어야 합니다.");
  }
}
