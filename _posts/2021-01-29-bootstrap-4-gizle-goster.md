---
title      : "Bootstrap 4 Ekran Boyutuna Göre Gizle ve Göster"
description: "Bootstrap 4 birlikte değişik ekran boyutlarına göre öğeleri gizleyebilir ve gösterebilirsiniz. Bunun için hazırlanan tablo ile kolaylıkla gerçekleştirebilirsiniz."
date       : 2020-01-29 11:30:00
categories : [Kod]
tags       : [Bootstrap 4]
image      : "/images/bootstrap-4-gizle-goster.png"
comments   : true
---

Bootstrap 4 birlikte değişik ekran boyutlarına göre öğeleri gizleyebilir ve gösterebilirsiniz. Bunun için hazırlanan tablo ile kolaylıkla gerçekleştirebilirsiniz. 

<table border="" bordercolor="#dee2e6" cellpadding="10" class="table push-down-30">
<thead>
<tr>
<th>xs (&lt;576px)</th>
<th>sm (≥576px)</th>
<th>md (≥768px)</th>
<th>lg (≥992px)</th>
<th>xl (≥1200px)</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>d-none d-sm-block</code></td>
<td>gizle</td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
</tr>
<tr>
<td><code>d-none d-md-block</code></td>
<td>gizle</td>
<td>gizle</td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
</tr>
<tr>
<td><code>d-none d-lg-block</code></td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
</tr>
<tr>
<td><code>d-none d-xl-block</code></td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
<td><strong>göster</strong></td>
</tr>
<tr>
<td><code>d-block d-xl-none</code></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td>gizle</td>
</tr>
<tr>
<td><code>d-block d-lg-none</code></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td>gizle</td>
<td>gizle</td>
</tr>
<tr>
<td><code>d-block d-md-none</code></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
</tr>
<tr>
<td><code>d-block d-sm-none</code></td>
<td><strong>göster</strong></td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
</tr>
</tbody>
</table>


### Yalnızca Belirli Görüntü Alanı Boyutunda Göster 

Sadece `sm` üzerinde göstermek istiyorsanız ancak diğer boyutlarda gizlemek için, `d-none d-sm-block d-md-none` kullanın.

<table border="" bordercolor="#dee2e6" cellpadding="10" class="table push-down-30">
<thead>
<tr>
<th>xs (&lt;576px)</th>
<th>sm (≥576px)</th>
<th>md (≥768px)</th>
<th>lg (≥992px)</th>
<th>xl (≥1200px)</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>d-block d-sm-none</code></td>
<td><strong>göster</strong></td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
</tr>
<tr>
<td><code>d-none d-sm-block d-md-none</code></td>
<td>gizle</td>
<td><strong>göster</strong></td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
</tr>
<tr>
<td><code>d-none d-md-block d-lg-none</code></td>
<td>gizle</td>
<td>gizle</td>
<td><strong>göster</strong></td>
<td>gizle</td>
<td>gizle</td>
</tr>
<tr>
<td><code>d-none d-lg-block d-xl-none</code></td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
<td><strong>göster</strong></td>
<td>gizle</td>
</tr>
<tr>
<td><code>d-none d-xl-block</code></td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
<td>gizle</td>
<td><strong>göster</strong></td>
</tr>
</tbody>
</table>

### Yalnızca Belirli Görüntü Alanı Boyutunda Gizle 

Yalnızca `sm`'de gizlemek ancak diğer boyutlarda göstermek istiyorsanız, `d-block d-sm-none d-md-block` kullanın.

<table border="" bordercolor="#dee2e6" cellpadding="10" class="table push-down-30">
<thead>
<tr>
<th>xs (&lt;576px)</th>
<th>sm (≥576px)</th>
<th>md (≥768px)</th>
<th>lg (≥992px)</th>
<th>xl (≥1200px)</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>d-none d-sm-block</code></td>
<td>gizle</td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
</tr>
<tr>
<td><code>d-block d-sm-none d-md-block</code></td>
<td><strong>göster</strong></td>
<td>gizle</td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
</tr>
<tr>
<td><code>d-block d-md-none d-lg-block</code></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td>gizle</td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
</tr>
<tr>
<td><code>d-block d-lg-none d-xl-block</code></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td>gizle</td>
<td><strong>göster</strong></td>
</tr>
<tr>
<td><code>d-block d-xl-none</code></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td><strong>göster</strong></td>
<td>gizle</td>
</tr>
</tbody>
</table>

#### Bibliyografya:

1. Bootstrap 4 Hide Element Based On Screen Size. 29 Ocak 2021. https://code.luasoftware.com/tutorials/bootstrap/bootstrap-hide-element-based-on-viewport-size/