<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RequestStore;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class RequestStoreController extends Controller
{

    /**
     * @OA\Get(
     *   path="/api/requests",
     *   tags={"Requests"},
     *   security={{"sanctum":{}}},
     *   summary="view all requests",
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function getRequests()
    {
        $requests = RequestStore::with('users')->get();
        return Response::json(['requests' => $requests, 'status' => 200], 200);
    }


    /**
     * @OA\Get(
     *   path="/api/myrequests",
     *   tags={"Requests"},
     *   security={{"sanctum":{}}},
     *   summary="view requests belong to you",
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function myrequests()
    {
        $requests = Auth()->user()->requests()->get();
        return Response::json(['requests' => $requests, 'status' => 200], 200);
    }


    /**
     * @OA\Get(
     *   path="/api/accepted/requests",
     *   tags={"Requests"},
     *   security={{"sanctum":{}}},
     *   summary="view accepted requests belong to you",
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function acceptedRequests()
    {
        $requests = Auth()->user()->requests()->where('isaccepted',1)->with('stores')->get();
        return Response::json(['requests' => $requests, 'status' => 200], 200);
    }


    /**
     * @OA\Post(
     *   path="/api/request/store/{id}",
     *   tags={"Requests"},
     *   summary="request store",
     *   security={{"sanctum":{}}},
     *   @OA\Parameter(
     *      name="id",
     *      in="path",
     *      required=true,
     *      description="storeId",
     *      @OA\Schema(
     *           type="integer"
     *      ),
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated",
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function requestStore($id)
    {

        $request = new RequestStore();
        $request->user_id=Auth::user()->id;
        $request->store_id=$id;
        $request->save();
        return  Response::json(['messsage' => 'your request is pending', 'status' => 2001], 200);
    }

    /**
     * @OA\Put(
     *   path="/api/accept/request/{id}",
     *   tags={"Requests"},
     *   summary="accept request",
     *   security={{"sanctum":{}}},
     *   @OA\Parameter(
     *      name="id",
     *      in="path",
     *      description="requestId",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      ),
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function acceptRequest($id)
    {
        $request = RequestStore::findOrFail($id);
        $request->status='accepted';
        $request->isaccepted=true;
        $request->save();
        return Response::json(['message' => 'request accepted', 'status' => 201], 200);
    }

    /**
     * @OA\Put(
     *   path="/api/reject/request/{id}",
     *   tags={"Requests"},
     *   summary="reject request",
     *   security={{"sanctum":{}}},
     *   @OA\Parameter(
     *      name="id",
     *      in="path",
     *      description="requestId",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      ),
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/

    public function rejectRequest($id)
    {
        $request = RequestStore::findOrFail($id);
        $request->status="rejected";
        $request->isaccepted=false;
        $request->save();
        return Response::json(['message' => 'request rejected', 'status' => 201], 200);
    }

    /**
     * @OA\Delete(
     *   path="/api/cancel/request/{id}",
     *   tags={"Requests"},
     *   summary="cancel request",
     *   security={{"sanctum":{}}},
     *   @OA\Parameter(
     *      name="id",
     *      in="path",
     *      description="requestId",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      ),
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/

    public function cancelRequest($id)
    {
        $request = RequestStore::findOrFail($id);
        $request->delete();
        return Response::json(['message' => 'request canceled'], 200);
    }
}
