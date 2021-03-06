module.exports = [
  [ false, '' ],
  [ false, '---' ],
  [ true, '2001:0000:1234:0000:0000:C1C0:ABCD:0876' ],
  [ true, '2001:0:1234::C1C0:ABCD:876' ],
  [ true, '3ffe:0b00:0000:0000:0001:0000:0000:000a' ],
  [ true, '3ffe:b00::1:0:0:a' ],
  [ true, 'FF02:0000:0000:0000:0000:0000:0000:0001' ],
  [ true, 'FF02::1' ],
  [ true, '0000:0000:0000:0000:0000:0000:0000:0001' ],
  [ true, '0000:0000:0000:0000:0000:0000:0000:0000' ],
  [ true, '::' ],
  [ true, '::ffff:192.168.1.26' ],
  [ true, '::ffff:192.168.1.26' ],
  [ false, '02001:0000:1234:0000:0000:C1C0:ABCD:0876' ],
  [ false, '2001:0000:1234:0000:00001:C1C0:ABCD:0876' ],
  [ true, ' 2001:0000:1234:0000:0000:C1C0:ABCD:0876' ],
  [ true, ' 2001:0:1234::C1C0:ABCD:876' ],
  [ true, ' 2001:0000:1234:0000:0000:C1C0:ABCD:0876  ' ],
  [ true, ' 2001:0:1234::C1C0:ABCD:876  ' ],
  [ false, ' 2001:0000:1234:0000:0000:C1C0:ABCD:0876  0' ],
  [ false, '2001:0000:1234: 0000:0000:C1C0:ABCD:0876' ],
  [ false, '2001:1:1:1:1:1:255Z255X255Y255' ],
  [ false, '3ffe:0b00:0000:0001:0000:0000:000a' ],
  [ false, 'FF02:0000:0000:0000:0000:0000:0000:0000:0001' ],
  [ false, '3ffe:b00::1::a' ],
  [ false, '::1111:2222:3333:4444:5555:6666::' ],
  [ true, '2::10' ],
  [ true, 'ff02::1' ],
  [ true, 'fe80::' ],
  [ true, '2002::' ],
  [ true, '2001:db8::' ],
  [ true, '2001:0db8:1234::' ],
  [ true, '::ffff:0:0' ],
  [ true, '::ffff:192.168.1.1' ],
  [ true, '1:2:3:4:5:6:7:8' ],
  [ true, '1:2:3:4:5:6::8' ],
  [ true, '1:2:3:4:5::8' ],
  [ true, '1:2:3:4::8' ],
  [ true, '1:2:3::8' ],
  [ true, '1:2::8' ],
  [ true, '1::8' ],
  [ true, '1::2:3:4:5:6:7' ],
  [ true, '1::2:3:4:5:6' ],
  [ true, '1::2:3:4:5' ],
  [ true, '1::2:3:4' ],
  [ true, '1::2:3' ],
  [ true, '1::8' ],
  [ true, '::2:3:4:5:6:7:8' ],
  [ true, '::2:3:4:5:6:7' ],
  [ true, '::2:3:4:5:6' ],
  [ true, '::2:3:4:5' ],
  [ true, '::2:3:4' ],
  [ true, '::2:3' ],
  [ true, '::8' ],
  [ true, '1:2:3:4:5:6::' ],
  [ true, '1:2:3:4:5::' ],
  [ true, '1:2:3:4::' ],
  [ true, '1:2:3::' ],
  [ true, '1:2::' ],
  [ true, '1::' ],
  [ true, '1:2:3:4:5::7:8' ],
  [ false, '1:2:3::4:5::7:8' ],
  [ false, '12345::6:7:8' ],
  [ true, '1:2:3:4::7:8' ],
  [ true, '1:2:3::7:8' ],
  [ true, '1:2::7:8' ],
  [ true, '1::7:8' ],
  [ true, '1:2:3:4:5:6:1.2.3.4' ],
  [ true, '1:2:3:4:5::1.2.3.4' ],
  [ true, '1:2:3:4::1.2.3.4' ],
  [ true, '1:2:3::1.2.3.4' ],
  [ true, '1:2::1.2.3.4' ],
  [ true, '1::1.2.3.4' ],
  [ true, '1:2:3:4::5:1.2.3.4' ],
  [ true, '1:2:3::5:1.2.3.4' ],
  [ true, '1:2::5:1.2.3.4' ],
  [ true, '1::5:1.2.3.4' ],
  [ true, '1::5:11.22.33.44' ],
  [ false, '1::5:400.2.3.4' ],
  [ false, '1::5:260.2.3.4' ],
  [ false, '1::5:256.2.3.4' ],
  [ false, '1::5:1.256.3.4' ],
  [ false, '1::5:1.2.256.4' ],
  [ false, '1::5:1.2.3.256' ],
  [ false, '1::5:300.2.3.4' ],
  [ false, '1::5:1.300.3.4' ],
  [ false, '1::5:1.2.300.4' ],
  [ false, '1::5:1.2.3.300' ],
  [ false, '1::5:900.2.3.4' ],
  [ false, '1::5:1.900.3.4' ],
  [ false, '1::5:1.2.900.4' ],
  [ false, '1::5:1.2.3.900' ],
  [ false, '1::5:300.300.300.300' ],
  [ false, '1::5:3000.30.30.30' ],
  [ false, '1::400.2.3.4' ],
  [ false, '1::260.2.3.4' ],
  [ false, '1::256.2.3.4' ],
  [ false, '1::1.256.3.4' ],
  [ false, '1::1.2.256.4' ],
  [ false, '1::1.2.3.256' ],
  [ false, '1::300.2.3.4' ],
  [ false, '1::1.300.3.4' ],
  [ false, '1::1.2.300.4' ],
  [ false, '1::1.2.3.300' ],
  [ false, '1::900.2.3.4' ],
  [ false, '1::1.900.3.4' ],
  [ false, '1::1.2.900.4' ],
  [ false, '1::1.2.3.900' ],
  [ false, '1::300.300.300.300' ],
  [ false, '1::3000.30.30.30' ],
  [ false, '::400.2.3.4' ],
  [ false, '::260.2.3.4' ],
  [ false, '::256.2.3.4' ],
  [ false, '::1.256.3.4' ],
  [ false, '::1.2.256.4' ],
  [ false, '::1.2.3.256' ],
  [ false, '::300.2.3.4' ],
  [ false, '::1.300.3.4' ],
  [ false, '::1.2.300.4' ],
  [ false, '::1.2.3.300' ],
  [ false, '::900.2.3.4' ],
  [ false, '::1.900.3.4' ],
  [ false, '::1.2.900.4' ],
  [ false, '::1.2.3.900' ],
  [ false, '::300.300.300.300' ],
  [ false, '::3000.30.30.30' ],
  [ true, 'fe80::217:f2ff:254.7.237.98' ],
  [ true, 'fe80::217:f2ff:fe07:ed62' ],
  [ true, '2001:DB8:0:0:8:800:200C:417A' ],
  [ true, 'FF01:0:0:0:0:0:0:101' ],
  [ true, 'FF01::101' ],
  [ true, '0:0:0:0:0:0:0:1' ],
  [ true, '0:0:0:0:0:0:0:0' ],
  [ true, '123.23.34.2' ],
  [ true, '2001:2:3:4:5:6:7:134' ],
  [ true, 'fe80::4413:c8ae:2821:5852%10' ],
  [ true, '172.26.168.134' ]
];
