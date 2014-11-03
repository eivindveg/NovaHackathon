import 'dart:html';
import 'loanrequest.dart';
import 'dart:convert';
import 'package:js/js.dart' as js;
import 'package:angular/angular.dart';
import 'package:angular/application_factory.dart';
import "package:json_object/json_object.dart";


void main() {
  js.scoped(() {
    // create a top-level JavaScript function called myJsonpCallback
    js.context.myJsonpCallback = new js.Callback.once( (jsonData) {
      print(jsonData); // js.Proxy object containing the data
      // see js interop docs
    });

    // add a script tag for the api required
    ScriptElement script = new Element.tag("script");
    // add the callback function name to the URL
    script.src = "http://example.com/some/api?callback=myJsonpCallback";
    document.body.children.add(script); // add the script to the DOM
  });
  print("Started");
  querySelector("form").querySelectorAll("input").forEach((e) =>
  e..onChange.listen(loadData));
}

void loadData(Event event) {
  print("Updated");
  FormElement form = document.querySelector("form");
  InputElement sumElement = form.querySelector("#sum");
  int principalAmount = int.parse(sumElement.value);
  InputElement interestElement = form.querySelector("#rate");
  double interestRate = double.parse(interestElement.value);
  InputElement downPaymentElement = form.querySelector("#repayment");
  int downPaymentTime = int.parse(downPaymentElement.value);

  LoanRequest loanRequest = new LoanRequest(interestRate, downPaymentTime, principalAmount);
  String json = JSON.encode(loanRequest);
  print(json);
  String path = "https://cfs-ws-itera.cicero.no/cfo/6/ws/rest/calculator/calculateLoan";
  HttpRequest request = new HttpRequest();
  request.open("GET", path);
  request.send(json);
  JsonObject response = new JsonObject.fromJsonString(request.responseText);
  print(response);
}
