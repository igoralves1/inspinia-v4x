<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OtherAppsController extends Controller
{
    public function companies()
    {
        return Inertia::render('other-apps/companies/index');
    }

    public function clients()
    {
        return Inertia::render('other-apps/clients/index');
    }

    public function outlookView()
    {
        return Inertia::render('other-apps/outlook-view/index');
    }

    public function voteList()
    {
        return Inertia::render('other-apps/vote-list/index');
    }

    public function issueTracker()
    {
        return Inertia::render('other-apps/issue-tracker/index');
    }

    public function apiKeys()
    {
        return Inertia::render('other-apps/api-keys/index');
    }

    public function blogs()
    {
        return Inertia::render('other-apps/blogs/index');
    }

    public function article()
    {
        return Inertia::render('other-apps/article/index');
    }

    public function pinBoard()
    {
        return Inertia::render('other-apps/pin-board/index');
    }

    public function forumView()
    {
        return Inertia::render('other-apps/forum-view/index');
    }

    public function forumPost()
    {
        return Inertia::render('other-apps/forum-post/index');
    }

}
