param([string]$Src, [string]$Dst, [int]$Max = 2000, [int]$Quality = 82)
# Resize one image so its longest side is $Max px and save as JPEG.
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($Src)
try {
  # honour EXIF orientation
  $orientId = 0x0112
  if ($img.PropertyIdList -contains $orientId) {
    $o = $img.GetPropertyItem($orientId).Value[0]
    switch ($o) { 3 { $img.RotateFlip('Rotate180FlipNone') } 6 { $img.RotateFlip('Rotate90FlipNone') } 8 { $img.RotateFlip('Rotate270FlipNone') } }
  }
  $scale = [Math]::Min(1.0, $Max / [Math]::Max($img.Width, $img.Height))
  $w = [int]($img.Width * $scale); $h = [int]($img.Height * $scale)
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.Clear([System.Drawing.Color]::White)
  $g.DrawImage($img, 0, 0, $w, $h)
  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $ep = New-Object System.Drawing.Imaging.EncoderParameters 1
  $q = [Int64]$Quality
  $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter -ArgumentList @([System.Drawing.Imaging.Encoder]::Quality, $q)
  New-Item -ItemType Directory -Force (Split-Path $Dst) | Out-Null
  $bmp.Save($Dst, $codec, $ep)
  $g.Dispose(); $bmp.Dispose()
} finally { $img.Dispose() }
