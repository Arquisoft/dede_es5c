
import java.time.Duration;
import java.util.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import io.gatling.javaapi.jdbc.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.javaapi.jdbc.JdbcDsl.*;

public class LoginSimulation extends Simulation {

  {
    HttpProtocolBuilder httpProtocol = http
      .baseUrl("http://localhost:3000")
      .inferHtmlResources(AllowList(), DenyList(".*\\.js", ".*\\.css", ".*\\.gif", ".*\\.jpeg", ".*\\.jpg", ".*\\.ico", ".*\\.woff", ".*\\.woff2", ".*\\.(t|o)tf", ".*\\.png", ".*detectportal\\.firefox\\.com.*"))
      .acceptHeader("*/*")
      .acceptEncodingHeader("gzip, deflate")
      .acceptLanguageHeader("es-ES,es;q=0.9")
      .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36");
    
    Map<CharSequence, String> headers_0 = new HashMap<>();
    headers_0.put("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
    headers_0.put("If-None-Match", "W/\"6de-eqpdeWuTgaTsJ/Z9ieo3CwxPGH8\"");
    headers_0.put("Sec-Fetch-Dest", "document");
    headers_0.put("Sec-Fetch-Mode", "navigate");
    headers_0.put("Sec-Fetch-Site", "same-origin");
    headers_0.put("Sec-Fetch-User", "?1");
    headers_0.put("Upgrade-Insecure-Requests", "1");
    headers_0.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100");
    headers_0.put("sec-ch-ua-mobile", "?0");
    headers_0.put("sec-ch-ua-platform", "Windows");
    
    Map<CharSequence, String> headers_1 = new HashMap<>();
    headers_1.put("Accept", "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8");
    headers_1.put("If-None-Match", "W/\"a48-35BNAU5U+4tTby/OOUnZ+FjVqGo\"");
    headers_1.put("Sec-Fetch-Dest", "image");
    headers_1.put("Sec-Fetch-Mode", "no-cors");
    headers_1.put("Sec-Fetch-Site", "same-origin");
    headers_1.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100");
    headers_1.put("sec-ch-ua-mobile", "?0");
    headers_1.put("sec-ch-ua-platform", "Windows");
    
    Map<CharSequence, String> headers_2 = new HashMap<>();
    headers_2.put("If-Modified-Since", "Mon, 02 May 2022 14:01:58 GMT");
    headers_2.put("If-None-Match", "W/\"205-1808513f023\"");
    headers_2.put("Sec-Fetch-Dest", "manifest");
    headers_2.put("Sec-Fetch-Mode", "cors");
    headers_2.put("Sec-Fetch-Site", "same-origin");
    headers_2.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100");
    headers_2.put("sec-ch-ua-mobile", "?0");
    headers_2.put("sec-ch-ua-platform", "Windows");
    
    Map<CharSequence, String> headers_3 = new HashMap<>();
    headers_3.put("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
    headers_3.put("Sec-Fetch-Dest", "document");
    headers_3.put("Sec-Fetch-Mode", "navigate");
    headers_3.put("Sec-Fetch-Site", "cross-site");
    headers_3.put("Sec-Fetch-User", "?1");
    headers_3.put("Upgrade-Insecure-Requests", "1");
    headers_3.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100");
    headers_3.put("sec-ch-ua-mobile", "?0");
    headers_3.put("sec-ch-ua-platform", "Windows");
    
    Map<CharSequence, String> headers_6 = new HashMap<>();
    headers_6.put("If-None-Match", "W/\"836-xQ4K7qLD8tOI3vbT1s+ZLiO0Rtk\"");
    headers_6.put("Origin", "http://localhost:3000");
    headers_6.put("Sec-Fetch-Dest", "empty");
    headers_6.put("Sec-Fetch-Mode", "cors");
    headers_6.put("Sec-Fetch-Site", "same-site");
    headers_6.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100");
    headers_6.put("sec-ch-ua-mobile", "?0");
    headers_6.put("sec-ch-ua-platform", "Windows");
    
    Map<CharSequence, String> headers_7 = new HashMap<>();
    headers_7.put("Accept", "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8");
    headers_7.put("If-None-Match", "W/\"6de-eqpdeWuTgaTsJ/Z9ieo3CwxPGH8\"");
    headers_7.put("Sec-Fetch-Dest", "image");
    headers_7.put("Sec-Fetch-Mode", "no-cors");
    headers_7.put("Sec-Fetch-Site", "same-origin");
    headers_7.put("sec-ch-ua", " Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100");
    headers_7.put("sec-ch-ua-mobile", "?0");
    headers_7.put("sec-ch-ua-platform", "Windows");
    
    String uri1 = "localhost";

    ScenarioBuilder scn = scenario("LoginSimulation")
      .exec(
        http("request_0")
          .get("/login")
          .headers(headers_0)
          .resources(
            http("request_1")
              .get("/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg")
              .headers(headers_1),
            http("request_2")
              .get("/manifest.json")
              .headers(headers_2)
          )
      )
      .pause(2)
      .exec(
        http("request_3")
          .get("/login?code=e661d6c2ee3c28e804b4a6037db92176&state=d83f2dcabd4249af9cbc8efcdb5a3449")
          .headers(headers_3)
          .resources(
            http("request_4")
              .get("/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg")
              .headers(headers_1),
            http("request_5")
              .get("/manifest.json")
              .headers(headers_2)
          )
      )
      .pause(3)
      .exec(
        http("request_6")
          .get("http://" + uri1 + ":5000/api/products/list")
          .headers(headers_6)
          .resources(
            http("request_7")
              .get("/xxx")
              .headers(headers_7)
          )
      );

	  setUp(
      scn.injectOpen(constantUsersPerSec(2).during(60).randomized())
      ).protocols(httpProtocol);
  }
}
