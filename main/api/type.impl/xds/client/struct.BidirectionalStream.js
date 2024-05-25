(function() {var type_impls = {
"xds":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BidirectionalStream%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/xds/client.rs.html#727-796\">source</a><a href=\"#impl-BidirectionalStream%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"xds/client/trait.ServiceClient.html\" title=\"trait xds::client::ServiceClient\">ServiceClient</a>&gt; <a class=\"struct\" href=\"xds/client/struct.BidirectionalStream.html\" title=\"struct xds::client::BidirectionalStream\">BidirectionalStream</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.connect\" class=\"method\"><a class=\"src rightside\" href=\"src/xds/client.rs.html#728-758\">source</a><h4 class=\"code-header\">pub fn <a href=\"xds/client/struct.BidirectionalStream.html#tymethod.connect\" class=\"fn\">connect</a>&lt;F&gt;(\n    identifier: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>&gt;,\n    response_task: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>((Sender&lt;C::<a class=\"associatedtype\" href=\"xds/client/trait.ServiceClient.html#associatedtype.Request\" title=\"type xds::client::ServiceClient::Request\">Request</a>&gt;, Receiver&lt;C::<a class=\"associatedtype\" href=\"xds/client/trait.ServiceClient.html#associatedtype.Request\" title=\"type xds::client::ServiceClient::Request\">Request</a>&gt;), <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Mutex&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;(<a class=\"enum\" href=\"xds/resource/enum.ResourceType.html\" title=\"enum xds::resource::ResourceType\">ResourceType</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;)&gt;&gt;&gt;) -&gt; F\n) -&gt; Self<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"type\" href=\"xds/type.Result.html\" title=\"type xds::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div></h4></section></div></details>",0,"xds::client::AdsStream","xds::client::MdsStream"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-BidirectionalStream%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/xds/client.rs.html#798-802\">source</a><a href=\"#impl-Drop-for-BidirectionalStream%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"xds/client/trait.ServiceClient.html\" title=\"trait xds::client::ServiceClient\">ServiceClient</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xds/client/struct.BidirectionalStream.html\" title=\"struct xds::client::BidirectionalStream\">BidirectionalStream</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/xds/client.rs.html#799-801\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","xds::client::AdsStream","xds::client::MdsStream"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()