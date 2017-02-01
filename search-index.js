var searchIndex = {};
searchIndex["plist"] = {"doc":"# Plist","items":[[3,"Deserializer","plist","",null,null],[3,"Serializer","","",null,null],[3,"EventReader","","",null,null],[4,"Plist","","",null,null],[13,"Array","","",0,null],[13,"Dictionary","","",0,null],[13,"Boolean","","",0,null],[13,"Data","","",0,null],[13,"Date","","",0,null],[13,"Real","","",0,null],[13,"Integer","","",0,null],[13,"String","","",0,null],[4,"PlistEvent","","An encoding of a plist as a flat structure.",null,null],[13,"StartArray","","",1,null],[13,"EndArray","","",1,null],[13,"StartDictionary","","",1,null],[13,"EndDictionary","","",1,null],[13,"BooleanValue","","",1,null],[13,"DataValue","","",1,null],[13,"DateValue","","",1,null],[13,"IntegerValue","","",1,null],[13,"RealValue","","",1,null],[13,"StringValue","","",1,null],[4,"Error","","",null,null],[13,"InvalidData","","",2,null],[13,"UnexpectedEof","","",2,null],[13,"Io","","",2,null],[13,"Serde","","",2,null],[5,"deserialize","","",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"serialize_to_xml","","",null,{"inputs":[{"name":"w"},{"name":"t"}],"output":{"name":"result"}}],[0,"binary","","",null,null],[3,"EventReader","plist::binary","https://opensource.apple.com/source/CF/CF-550/CFBinaryPList.c\nhttps://hg.python.org/cpython/file/3.4/Lib/plistlib.py",null,null],[11,"from","plist","",2,{"inputs":[{"name":"fromutf8error"}],"output":{"name":"error"}}],[11,"from","","",2,{"inputs":[{"name":"fromutf16error"}],"output":{"name":"error"}}],[11,"new","plist::binary","",3,{"inputs":[{"name":"r"}],"output":{"name":"eventreader"}}],[11,"next","","",3,null],[0,"xml","plist","",null,null],[3,"EventReader","plist::xml","",null,null],[3,"EventWriter","","",null,null],[11,"from","plist","",2,{"inputs":[{"name":"chronoparseerror"}],"output":{"name":"error"}}],[11,"new","plist::xml","",4,{"inputs":[{"name":"r"}],"output":{"name":"eventreader"}}],[11,"next","","",4,null],[11,"from","plist","",2,{"inputs":[{"name":"xmlwritererror"}],"output":{"name":"error"}}],[11,"new","plist::xml","",5,{"inputs":[{"name":"w"}],"output":{"name":"eventwriter"}}],[11,"write","","",5,null],[11,"write","","",5,null],[11,"custom","plist","",2,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"end_of_stream","","",2,{"inputs":[],"output":{"name":"self"}}],[11,"new","","",6,{"inputs":[{"name":"i"}],"output":{"name":"deserializer"}}],[11,"deserialize","","",6,null],[11,"deserialize_unit","","",6,null],[11,"deserialize_option","","",6,null],[11,"deserialize_newtype_struct","","",6,null],[11,"deserialize_enum","","",6,null],[11,"visit_variant","","",6,null],[11,"visit_unit","","",6,null],[11,"visit_newtype","","",6,null],[11,"visit_tuple","","",6,null],[11,"visit_struct","","",6,null],[11,"custom","","",2,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"invalid_value","","",2,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"new","","",7,{"inputs":[{"name":"w"}],"output":{"name":"serializer"}}],[11,"into_inner","","",7,null],[11,"serialize_bool","","",7,null],[11,"serialize_i64","","",7,null],[11,"serialize_u64","","",7,null],[11,"serialize_f64","","",7,null],[11,"serialize_str","","",7,null],[11,"serialize_bytes","","",7,null],[11,"serialize_unit","","",7,null],[11,"serialize_none","","",7,null],[11,"serialize_some","","",7,null],[11,"serialize_seq","","",7,null],[11,"serialize_seq_elt","","",7,null],[11,"serialize_map","","",7,null],[11,"serialize_map_elt","","",7,null],[11,"serialize_unit_variant","","",7,null],[11,"serialize_newtype_struct","","",7,null],[11,"serialize_newtype_variant","","",7,null],[11,"serialize_tuple_variant","","",7,null],[11,"serialize_struct_variant","","",7,null],[6,"Result","","",null,null],[8,"EventWriter","","",null,null],[10,"write","","",8,null],[11,"clone","","",0,null],[11,"fmt","","",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"read","","",0,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"from_events","","",0,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[11,"into_events","","",0,null],[11,"into_rustc_serialize_json","","",0,null],[11,"as_array","","If the `Plist` is an Array, returns the associated Vec.\nReturns None otherwise.",0,null],[11,"as_array_mut","","If the `Plist` is an Array, returns the associated mutable Vec.\nReturns None otherwise.",0,null],[11,"as_dictionary","","If the `Plist` is a Dictionary, returns the associated BTreeMap.\nReturns None otherwise.",0,null],[11,"as_dictionary_mut","","If the `Plist` is a Dictionary, returns the associated mutable BTreeMap.\nReturns None otherwise.",0,null],[11,"as_boolean","","If the `Plist` is a Boolean, returns the associated bool.\nReturns None otherwise.",0,null],[11,"into_data","","If the `Plist` is a Data, returns the underlying Vec.\nReturns None otherwise.",0,null],[11,"as_data","","If the `Plist` is a Data, returns the associated Vec.\nReturns None otherwise.",0,null],[11,"as_date","","If the `Plist` is a Date, returns the associated DateTime.\nReturns None otherwise.",0,null],[11,"as_real","","If the `Plist` is a Real, returns the associated f64.\nReturns None otherwise.",0,null],[11,"as_integer","","If the `Plist` is an Integer, returns the associated i64.\nReturns None otherwise.",0,null],[11,"into_string","","If the `Plist` is a String, returns the underlying String.\nReturns None otherwise.",0,null],[11,"as_string","","If the `Plist` is a String, returns the associated str.\nReturns None otherwise.",0,null],[11,"from","","",0,{"inputs":[{"name":"vec"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"btreemap"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"bool"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"bool"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"datetime"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"datetime"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"f64"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"f32"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"i64"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"i32"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"i16"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"i8"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"u32"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"u16"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"u8"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"f64"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"f32"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"i64"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"i32"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"i16"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"i8"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"u32"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"u16"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"u8"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"string"}],"output":{"name":"plist"}}],[11,"from","","",0,{"inputs":[{"name":"str"}],"output":{"name":"plist"}}],[11,"clone","","",1,null],[11,"fmt","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"fmt","","",2,null],[11,"description","","",2,null],[11,"cause","","",2,null],[11,"fmt","","",2,null],[11,"from","","",2,{"inputs":[{"name":"ioerror"}],"output":{"name":"error"}}],[11,"new","","",9,{"inputs":[{"name":"r"}],"output":{"name":"eventreader"}}],[11,"next","","",9,null]],"paths":[[4,"Plist"],[4,"PlistEvent"],[4,"Error"],[3,"EventReader"],[3,"EventReader"],[3,"EventWriter"],[3,"Deserializer"],[3,"Serializer"],[8,"EventWriter"],[3,"EventReader"]]};
initSearch(searchIndex);
