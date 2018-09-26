var loading = '', upload_config = '';
$(".image-del-btn").on("click", function() {
    var $input = $(this).parent().siblings(".form-img-preview").find('.image-hidden-input');
    var $img = $(this).parent().siblings(".form-img-preview").find("img");
    $input.val('');
    $img.attr( 'src', '/img/no-image.png' );
});

// 初始化Web Uploader
var uploader = WebUploader.create({
    // 选完文件后，是否自动上传。
    auto: true,

    duplicate: true,
    compress: false,
    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: '.image-upload-btn',
    // 只允许选择图片文件。
    accept: {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png',
        mimeTypes: 'image/jpg,image/jpeg,image/png,image/gif'
    }
});

uploader.on( 'startUpload', function( block, data ) {
    if ('' == upload_config || upload_config.expire < new Date().getTime()){
        $.getJSON("/upload",function(json){
            upload_config = json.data;
            setUploadParams(upload_config);
        });
    }else{
        setUploadParams(upload_config);
    }
});

function setUploadParams(config) {
    uploader.options.server = config.host;
    uploader.options.formData.policy = config.policy;
    uploader.options.formData.key = config.dir + '${filename}';
    uploader.options.formData.OSSAccessKeyId = config.accessid;
    uploader.options.formData.signature = config.signature;
    uploader.options.formData.success_action_status = 200;
    uploader.options.formData.callback = config.callback;
    uploader.options.formData.url = config.host;
}

// 当有文件添加进来的时候
uploader.on( 'fileQueued', function( file ) {
    // 创建缩略图
    // 如果为非图片文件，可以不用调用此方法。
    // thumbnailWidth x thumbnailHeight 为 100 x 100
    var uploaderId = '#rt_'+file.source.getRuid();
    var $img = $(uploaderId).parent().parent().siblings(".form-img-preview").find("img");
    uploader.makeThumb( file, function( error, src ) {
        if ( error ) {
            //$img.replaceWith('<span>不能预览</span>');
            return;
        }
        $img.attr( 'src', src );
    }, 160, 160 );
});

// 文件上传过程中创建进度条实时显示。
uploader.on( 'uploadStart', function( file, percentage ) {
    loading = layer.load(0, {shade: [0.5]}); //0代表加载的风格，支持0-2
});

// 文件上传过程中创建进度条实时显示。
uploader.on( 'uploadProgress', function( file, percentage ) {
    //layer.msg('恭喜您，加载完成！',{time: 1000,offset: '10px'});
    //$percent.css( 'width', percentage * 100 + '%' );
});

// 文件上传成功，给item添加成功class, 用样式标记上传成功。
uploader.on( 'uploadSuccess', function( file, response  ) {
    var uploaderId = '#rt_'+file.source.getRuid();
    var $input = $(uploaderId).parent().parent().siblings(".form-img-preview").find('.image-hidden-input');
    $input.val(response.data.url);
    layer.msg('上传成功');
});

// 文件上传失败，显示上传出错。
uploader.on( 'uploadError', function( file ) {
    layer.msg('上传失败，请重试。');
});

// 完成上传完了，成功或者失败，先删除进度条。
uploader.on( 'uploadComplete', function( file ) {
    layer.close(loading);
});

$.getJSON("/upload",function(json){
    upload_config = json.data;
    setUploadParams(upload_config);
});


$('.summernote').summernote({
    lang: 'zh-CN',
    height: 400,
    onImageUpload: function(files, editor, welEditable) {
        if ('' == upload_config || upload_config.expire < new Date().getTime()){
            $.getJSON("/upload",function(json){
                upload_config =  json;
                summernote_upload(upload_config, files, editor, welEditable)
            });
        }else{
            summernote_upload(upload_config, files, editor, welEditable);
        }
    }
});

function summernote_upload(config, files, editor, welEditable) {
    var formData = new FormData();
    formData.append('policy', config.policy);
    formData.append('key', config.dir + '${filename}');
    formData.append('OSSAccessKeyId', config.accessid);
    formData.append('signature', config.signature);
    formData.append('success_action_status', '200');
    formData.append('callback', config.callback);
    formData.append('url', config.url);
    formData.append('file',files[0]);

    // alert("host"+config.host);
    $.ajax({
        url : config.host,//后台文件上传接口
        type : 'POST',
        data : formData,
        processData : false,
        contentType : false,
        success : function(data) {
            editor.insertImage(welEditable, config.host + "/" + data.data.url);
        }
    });
}

