/* Generated by JSIL v0.7.8 build 26862. See http://jsil.org/ for more information. */ 
var $asm00 = JSIL.DeclareAssembly("HC.OPUS.HTML5, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("HC");
JSIL.DeclareNamespace("HC.OPUS");
JSIL.DeclareNamespace("HC.OPUS.HTML5");
/* class HC.OPUS.HTML5.JsOpusApp */ 

(function JsOpusApp$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm01.System.Collections.Generic.Dictionary$b2.Of($asm01.System.Int32, $asm01.System.String))) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm01.System.Collections.Generic.Dictionary$b2_Enumerator.Of($asm01.System.Int32, $asm01.System.String))) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm01.System.Collections.Generic.KeyValuePair$b2.Of($asm01.System.Int32, $asm01.System.String))) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm01.System.Console)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm01.System.Collections.Generic.Dictionary$b2.Of($asm01.System.Int32, $asm01.System.Int32))) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm01.System.Collections.Generic.Dictionary$b2_Enumerator.Of($asm01.System.Int32, $asm01.System.Int32))) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm01.System.Collections.Generic.KeyValuePair$b2.Of($asm01.System.Int32, $asm01.System.Int32))) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm01.TypeRef("System.Collections.Generic.Dictionary`2", [$asm01.TypeRef("System.Int32"), $asm01.TypeRef("System.String")]), null))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.ConstructorSignature($asm01.TypeRef("System.Collections.Generic.Dictionary`2", [$asm01.TypeRef("System.Int32"), $asm01.TypeRef("System.Int32")]), null))) ();
  };

  function JsOpusApp__ctor () {
  };

  function JsOpusApp_Main () {
    var a = ($S00().Construct()).__Initialize__([[1, "a"], [2, "b"], [3, "a"], [4, "b"], [5, "a"], [6, "b"], [7, "a"], [8, "b"]]);
    var enumerator = $T00().prototype.GetEnumerator.call(a);

    while ($T01().prototype.MoveNext.call(enumerator)) {
      var pair = $T01().prototype.get_Current.call(enumerator).MemberwiseClone();
      $T03().WriteLine("a");
    }
    var childrenDictionary = ($S01().Construct()).__Initialize__([[0, 100], [1, 200]]);
    var enumerator2 = $T04().prototype.GetEnumerator.call(childrenDictionary);

    while ($T05().prototype.MoveNext.call(enumerator2)) {
      var record = $T05().prototype.get_Current.call(enumerator2).MemberwiseClone();
      $T03().WriteLine("b");
    }
  };

  JSIL.MakeType({
      BaseType: $asm01.TypeRef("System.Object"), 
      Name: "HC.OPUS.HTML5.JsOpusApp", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      JsOpusApp__ctor
    );

    $.Method({Static:true , Public:true }, "Main", 
      JSIL.MethodSignature.Void, 
      JsOpusApp_Main
    );

    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

