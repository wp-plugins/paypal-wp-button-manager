jQuery(function ($) {
'use strict';
var oPage = document.getElementById('main').getElementsByTagName('div')[0];var oContainer = document.createElement('div');oContainer.id = 'pageLoadMsg';oContainer.innerHTML = "Loading...";oPage.appendChild(oContainer);

var imageUrls = {en: {BuyNow: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fbuynow\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fbuynow\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fbuynowCC\x5fLG\x2egif"},PayNow: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fpaynow\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fpaynow\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fpaynowCC\x5fLG\x2egif"},AddToCart: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fcart\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fcart\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fcart\x5fLG\x2egif"},Donate: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fdonate\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fdonate\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fdonateCC\x5fLG\x2egif"},GiftCertificate: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fgift\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fgift\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fgiftCC\x5fLG\x2egif"},Subscribe: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fsubscribe\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fsubscribe\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fsubscribeCC\x5fLG\x2egif"},PaymentPlan: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fCC\x5fLG\x2egif"},AutoBilling: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fCC\x5fLG\x2egif"}},fr: {BuyNow: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fbuynow\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fbuynow\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fbuynowCC\x5fLG\x2egif"},PayNow: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fpaynow\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fpaynow\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fpaynowCC\x5fLG\x2egif"},AddToCart: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fcart\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fcart\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fcart\x5fLG\x2egif"},Donate: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fdonate\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fdonate\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fdonateCC\x5fLG\x2egif"},GiftCertificate: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fgift\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fgift\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fgiftCC\x5fLG\x2egif"},Subscribe: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fsubscribe\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fsubscribe\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fsubscribeCC\x5fLG\x2egif"},PaymentPlan: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fCC\x5fLG\x2egif"},AutoBilling: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2ffr\x5fXC\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fCC\x5fLG\x2egif"}},es: {BuyNow: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fbuynow\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fbuynow\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fbuynowCC\x5fLG\x2egif"},PayNow: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fpaynow\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fpaynow\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fpaynowCC\x5fLG\x2egif"},AddToCart: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fcart\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fcart\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fcart\x5fLG\x2egif"},Donate: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fdonate\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fdonate\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fdonateCC\x5fLG\x2egif"},GiftCertificate: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fgift\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fgift\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fgiftCC\x5fLG\x2egif"},Subscribe: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fsubscribe\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fsubscribe\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fsubscribeCC\x5fLG\x2egif"},PaymentPlan: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fCC\x5fLG\x2egif"},AutoBilling: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fes\x5fXC\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fCC\x5fLG\x2egif"}},zh: {BuyNow: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fbuynow\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fbuynow\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fbuynowCC\x5fLG\x2egif"},PayNow: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fpaynow\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fpaynow\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fpaynowCC\x5fLG\x2egif"},AddToCart: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fcart\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fcart\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fcart\x5fLG\x2egif"},Donate: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fdonate\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fdonate\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fdonateCC\x5fLG\x2egif"},GiftCertificate: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fgift\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fgift\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fgiftCC\x5fLG\x2egif"},Subscribe: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fsubscribe\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fsubscribe\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fsubscribeCC\x5fLG\x2egif"},PaymentPlan: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5finstallment\x5fplan\x5fCC\x5fLG\x2egif"},AutoBilling: {small: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fSM\x2egif", large: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fLG\x2egif", cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fzh\x5fXC\x2fi\x2fbtn\x2fbtn\x5fauto\x5fbilling\x5fCC\x5fLG\x2egif"}},int: {BuyNow: {cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fbuynowCC\x5fLG\x5fglobal\x2egif"},Donate: {cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fdonateCC\x5fLG\x5fglobal\x2egif"},GiftCertificate: {cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fgiftCC\x5fLG\x5fglobal\x2egif"},PayNow: {cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fpaynowCC\x5fLG\x5fglobal\x2egif"},Subscribe: {cc: "https\x3a\x2f\x2fwww\x2epaypalobjects\x2ecom\x2fen\x5fUS\x2fi\x2fbtn\x2fbtn\x5fsubscribeCC\x5fLG\x5fglobal\x2egif"}}};

  s.prop1="xpt\x2fMerchant\x2fbuttondesigner\x2fMaster";
         s.prop6="0KN66742MV0111521";
         s.prop7="business";
         s.prop8="unverified";
         s.prop9="unrestricted";
         s.prop10="US";
         s.prop20="1426331889";
         s.prop25="BF\x3aInternal";
         s.prop30="Payment";
         s.prop35="in";
         s.prop40="34281de6c473c";
         s.prop50="en_US";
         s.prop51="BF\x3aInternal";
         s.prop64="";
         s.eVar5="US";
         s.eVar7="business\x3aunverified\x3aunrestricted";
         s.eVar19="business";
         s.eVar25="BF\x3aInternal";
         s.eVar31="BF\x3aInternal";
         s.eVar50="wxl\x252bXQV\x252fF2E49GzVyOA2lf03y\x252fi50VD8aLWqmUcpAVxiurqmGswElw\x253d\x253d\x5f14c18016d5e";
         s.eVar56="Hawk";
         s.pageName="BF\x3aInternal";
         s.prop56="no";
         s.prop18="";
         s.prop16="";
         s.prop34="PayPalCredit:Servicing:CO:NoTransactions";
         
         
         
         var browserDisable=0;var choutEnabled=0;
         if(browserDisable==0){
             if(typeof YUE == 'object'){YUE.addListener(window, "load", function() { PAYPAL.util.lazyLoad("/pa/js/min/paypal-wp-button-manager-pa.js", function() { 
                         if (typeof(PAYPAL.analytics) !== "undefined" && typeof(PAYPAL.analytics.setup) !== "undefined") { PAYPAL.analytics.setup({ data: "pgrp=BF\x253aInternal&cnac=US&page=BF\x253aInternal&tmpl=xpt\x252fMerchant\x252fbuttondesigner\x252fMaster&cust=0KN66742MV0111521&acnt=business&aver=unverified&rstr=unrestricted&pgst=1426331889&lgin=in&calc=34281de6c473c&rsta=en_US&calf=&ccpg=Payment&oldp=BF\x253aInternal", url: "\x2f\x2ft\x2epaypal\x2ecom\x2fts" }); }
                     });
                 });
             } else{var FptiUrl ='https://www\x2epaypalobjects\x2ecom\x2fWEBSCR\x2d640\x2d20150220\x2d1/pa/js/min/pa.js';									
                 var Fptihead = document.getElementsByTagName('head')[0];
                 var FptiScript = document.createElement('script');
                 FptiScript.type = 'text/javascript';
                 FptiScript.src = FptiUrl;
                 Fptihead.appendChild(FptiScript);									
                 if (window.addEventListener){
                     window.addEventListener("load",  function () {if (typeof(PAYPAL.analytics) !== "undefined" && typeof(PAYPAL.analytics.setup) !== "undefined") { PAYPAL.analytics.setup({ data: "pgrp=BF\x253aInternal&cnac=US&page=BF\x253aInternal&tmpl=xpt\x252fMerchant\x252fbuttondesigner\x252fMaster&cust=0KN66742MV0111521&acnt=business&aver=unverified&rstr=unrestricted&pgst=1426331889&lgin=in&calc=34281de6c473c&rsta=en_US&calf=&ccpg=Payment&oldp=BF\x253aInternal", url: "\x2f\x2ft\x2epaypal\x2ecom\x2fts" }); }
                     }, false);
                 }  else if (window.attachEvent) {
                     window.attachEvent("onload",  function () {if (typeof(PAYPAL.analytics) !== "undefined" && typeof(PAYPAL.analytics.setup) !== "undefined") { PAYPAL.analytics.setup({ data: "pgrp=BF\x253aInternal&cnac=US&page=BF\x253aInternal&tmpl=xpt\x252fMerchant\x252fbuttondesigner\x252fMaster&cust=0KN66742MV0111521&acnt=business&aver=unverified&rstr=unrestricted&pgst=1426331889&lgin=in&calc=34281de6c473c&rsta=en_US&calf=&ccpg=Payment&oldp=BF\x253aInternal", url: "\x2f\x2ft\x2epaypal\x2ecom\x2fts" }); }
                     });
                 } else { window.onload = function(){
                         if (typeof(PAYPAL.analytics) !== "undefined" && typeof(PAYPAL.analytics.setup) !== "undefined") { PAYPAL.analytics.setup({ data: "pgrp=BF\x253aInternal&cnac=US&page=BF\x253aInternal&tmpl=xpt\x252fMerchant\x252fbuttondesigner\x252fMaster&cust=0KN66742MV0111521&acnt=business&aver=unverified&rstr=unrestricted&pgst=1426331889&lgin=in&calc=34281de6c473c&rsta=en_US&calf=&ccpg=Payment&oldp=BF\x253aInternal", url: "\x2f\x2ft\x2epaypal\x2ecom\x2fts" }); }
         
             }
         }
         }
         }
         
  
});