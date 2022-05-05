
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class AddCarritoSimulation extends Simulation {

  private val httpProtocol = http
    .baseUrl("http://localhost:3000")
    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""))
    .acceptHeader("*/*")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("es-ES,es;q=0.9")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36")
  
  private val headers_0 = Map(
  		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  		"Cache-Control" -> "max-age=0",
  		"If-None-Match" -> """W/"6de-eqpdeWuTgaTsJ/Z9ieo3CwxPGH8"""",
  		"Sec-Fetch-Dest" -> "document",
  		"Sec-Fetch-Mode" -> "navigate",
  		"Sec-Fetch-Site" -> "none",
  		"Sec-Fetch-User" -> "?1",
  		"Upgrade-Insecure-Requests" -> "1",
  		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_1 = Map(
  		"If-None-Match" -> """W/"836-xQ4K7qLD8tOI3vbT1s+ZLiO0Rtk"""",
  		"Origin" -> "http://localhost:3000",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "same-site",
  		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_2 = Map(
  		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  		"If-None-Match" -> """W/"a48-35BNAU5U+4tTby/OOUnZ+FjVqGo"""",
  		"Sec-Fetch-Dest" -> "image",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "same-origin",
  		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_3 = Map(
  		"Accept" -> "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  		"If-None-Match" -> """W/"6de-eqpdeWuTgaTsJ/Z9ieo3CwxPGH8"""",
  		"Sec-Fetch-Dest" -> "image",
  		"Sec-Fetch-Mode" -> "no-cors",
  		"Sec-Fetch-Site" -> "same-origin",
  		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_4 = Map(
  		"If-Modified-Since" -> "Mon, 02 May 2022 14:01:58 GMT",
  		"If-None-Match" -> """W/"205-1808513f023"""",
  		"Sec-Fetch-Dest" -> "manifest",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "same-origin",
  		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_5 = Map(
  		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  		"If-None-Match" -> """W/"6de-eqpdeWuTgaTsJ/Z9ieo3CwxPGH8"""",
  		"Sec-Fetch-Dest" -> "document",
  		"Sec-Fetch-Mode" -> "navigate",
  		"Sec-Fetch-Site" -> "same-origin",
  		"Sec-Fetch-User" -> "?1",
  		"Upgrade-Insecure-Requests" -> "1",
  		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_8 = Map(
  		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  		"Sec-Fetch-Dest" -> "document",
  		"Sec-Fetch-Mode" -> "navigate",
  		"Sec-Fetch-Site" -> "cross-site",
  		"Sec-Fetch-User" -> "?1",
  		"Upgrade-Insecure-Requests" -> "1",
  		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val headers_13 = Map(
  		"If-None-Match" -> """W/"22d-n2NspNtSZp7rgcFHg4mTvbHgpkc"""",
  		"Origin" -> "http://localhost:3000",
  		"Sec-Fetch-Dest" -> "empty",
  		"Sec-Fetch-Mode" -> "cors",
  		"Sec-Fetch-Site" -> "same-site",
  		"sec-ch-ua" -> """ Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100""",
  		"sec-ch-ua-mobile" -> "?0",
  		"sec-ch-ua-platform" -> "Windows"
  )
  
  private val uri1 = "localhost"

  private val scn = scenario("AddCarritoSimulation")
    .exec(
      http("request_0")
        .get("/")
        .headers(headers_0)
        .resources(
          http("request_1")
            .get("http://" + uri1 + ":5000/api/products/list")
            .headers(headers_1),
          http("request_2")
            .get("/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg")
            .headers(headers_2),
          http("request_3")
            .get("/xxx")
            .headers(headers_3),
          http("request_4")
            .get("/manifest.json")
            .headers(headers_4)
        )
    )
    .pause(5)
    .exec(
      http("request_5")
        .get("/login")
        .headers(headers_5)
        .resources(
          http("request_6")
            .get("/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg")
            .headers(headers_2),
          http("request_7")
            .get("/manifest.json")
            .headers(headers_4)
        )
    )
    .pause(11)
    .exec(
      http("request_8")
        .get("/login?code=4243c072375fa741b94c53346fecaa40&state=6e654145c307471e81059628e442b9e6")
        .headers(headers_8)
        .resources(
          http("request_9")
            .get("/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg")
            .headers(headers_2),
          http("request_10")
            .get("/manifest.json")
            .headers(headers_4),
          http("request_11")
            .get("http://" + uri1 + ":5000/api/products/list")
            .headers(headers_1),
          http("request_12")
            .get("/xxx")
            .headers(headers_3)
        )
    )
    .pause(1)
    .exec(
      http("request_13")
        .get("http://" + uri1 + ":5000/api/products/Mom%20Jeans%20apertura%20pierna")
        .headers(headers_13)
    )

	setUp(
          scn.inject(constantUsersPerSec(2).during(60).randomized)
          ).protocols(httpProtocol)
}
